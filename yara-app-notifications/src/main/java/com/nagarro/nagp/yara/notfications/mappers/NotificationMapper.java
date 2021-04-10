package com.nagarro.nagp.yara.notfications.mappers-app.notfications.mappers;

import java.lang.reflect.Field;

import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.notfications.dto.NotificationContentDTO;
import com.nagarro.nagp.yara-app.notfications.helper.NotificationContentParser;
import com.nagarro.nagp.yara-app.notfications.models.Notification;
import com.nagarro.nagp.yara-app.notfications.models.NotificationTemplate;

public final class NotificationMapper {

	public static Notification getNotificationFromModels(final NotificationContentDTO notificationContentDTO,
			final NotificationTemplate notificationTemplate, final String userId) {
		final Notification notification = new Notification();
		notification.setBody(notificationContentDTO.getBody());
		notification.setDistributionType(notificationTemplate.getType());
		notification.setMedium(notificationTemplate.getMedium());
		notification.setName(notificationTemplate.getName());
		notification.setReceiver(userId);
		notification.setStatus("SUCCESS");
		notification.setTitle(notificationContentDTO.getSubject());
		notification.setType(notificationTemplate.getType());
		return notification;
	}

	public static NotificationContentDTO getNotificationContentDTOFromModels(
			final NotificationTemplate notificationTemplate, final NotificationDTO notificationDTO,
			final UserDTO userDTO) throws IllegalArgumentException, IllegalAccessException {
		final NotificationContentDTO notificationContentDTO = new NotificationContentDTO();
		notificationContentDTO.setBody(NotificationContentParser
				.parseNotificaitonContent(notificationTemplate.getTemplateBody(), notificationDTO, userDTO));
		notificationContentDTO.setSubject(NotificationContentParser
				.parseNotificaitonContent(notificationTemplate.getTemplateSubject(), notificationDTO, userDTO));
		return notificationContentDTO;
	}

	public static UserDTO getUserDTOFromNotificationDTO(final NotificationDTO notificationDTO)
			throws NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
		final Field field = UserDTO.class.getDeclaredField(NotificationDTO.getUserDTOFieldName());
		field.setAccessible(true);
		final UserDTO userDTO = (UserDTO) field.get(notificationDTO);
		return userDTO;
	}

}
