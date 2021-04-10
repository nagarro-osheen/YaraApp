package com.nagarro.nagp.amcart.notfications.services.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.nagarro.nagp.amcart.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.amcart.common.notifications.dto.UserDTO;
import com.nagarro.nagp.amcart.exception.ACTechnicalException;
import com.nagarro.nagp.amcart.notfications.dto.NotificationContentDTO;
import com.nagarro.nagp.amcart.notfications.mappers.NotificationMapper;
import com.nagarro.nagp.amcart.notfications.mediums.NotificationMedium;
import com.nagarro.nagp.amcart.notfications.mediums.factory.NotificationMediumFactory;
import com.nagarro.nagp.amcart.notfications.models.Notification;
import com.nagarro.nagp.amcart.notfications.models.NotificationTemplate;
import com.nagarro.nagp.amcart.notfications.repositories.NotificationRepository;
import com.nagarro.nagp.amcart.notfications.repositories.NotificationTemplateRepository;
import com.nagarro.nagp.amcart.notfications.services.INotificationGroupService;
import com.nagarro.nagp.amcart.notfications.services.INotificationService;

@Service
public class NotificationServiceImpl implements INotificationService {

	@Autowired
	private NotificationMediumFactory notificationMediumFactory;

	@Autowired
	private NotificationTemplateRepository notificationTemplateRepository;

	@Autowired
	private NotificationRepository notificationRepository;

	@Autowired
	private INotificationGroupService notificationGroupService;

	@Override
	public void sendNotification(final NotificationDTO notificationDTO) throws ACTechnicalException {
		try {
			final List<NotificationTemplate> notificationTemplates = notificationTemplateRepository
					.findByName(notificationDTO.getName());
			final Collection<UserDTO> users = getUsersFormNotificationDTO(notificationDTO);
			for (final NotificationTemplate notificationTemplate : notificationTemplates) {
				sendNotificationToUsers(notificationDTO, notificationTemplate, users);
			}
		} catch (IllegalArgumentException | IllegalAccessException | NoSuchFieldException | SecurityException
				| RestClientException | IOException e) {
			throw new ACTechnicalException("exception while sending notification ", e);
		}
	}

	private Collection<UserDTO> getUsersFormNotificationDTO(final NotificationDTO notificationDTO)
			throws NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException,
			JsonParseException, JsonMappingException, RestClientException, IOException {
		Collection<UserDTO> users = null;
		if (isBroadcastNotification(notificationDTO)) {
			users = notificationGroupService.getUsersByGroupId(notificationDTO.getGroupId());
		} else {
			users = new ArrayList<>();
			users.add(NotificationMapper.getUserDTOFromNotificationDTO(notificationDTO));
		}
		return users;
	}

	private boolean isBroadcastNotification(final NotificationDTO notificationDTO) {
		return notificationDTO.getGroupId() != null;
	}

	private void sendNotificationToUsers(final NotificationDTO notificationDTO,
			final NotificationTemplate notificationTemplate, final Collection<UserDTO> users)
			throws IllegalAccessException {
		for (final UserDTO user : users) {
			sendNotificationToUser(notificationDTO, notificationTemplate, user);
		}
	}

	private void sendNotificationToUser(final NotificationDTO notificationDTO,
			final NotificationTemplate notificationTemplate, final UserDTO userDTO) throws IllegalAccessException {
		final NotificationContentDTO notificationContentDTO = sendNotificaitonByTemplate(notificationTemplate,
				notificationDTO, userDTO);
		final Notification notification = (NotificationMapper.getNotificationFromModels(notificationContentDTO,
				notificationTemplate, userDTO.getUserId()));
		notificationRepository.save(notification);

	}

	private NotificationContentDTO sendNotificaitonByTemplate(final NotificationTemplate notificationTemplate,
			final NotificationDTO notificationDTO, final UserDTO userDTO)
			throws IllegalArgumentException, IllegalAccessException {
		final NotificationContentDTO notificationContentDTO = NotificationMapper
				.getNotificationContentDTOFromModels(notificationTemplate, notificationDTO, userDTO);
		final NotificationMedium notificationMedium = notificationMediumFactory
				.getNotificationMedium(notificationTemplate.getMedium().getName());
		notificationMedium.sendNotification(userDTO, notificationContentDTO);
		return notificationContentDTO;
	}

}
