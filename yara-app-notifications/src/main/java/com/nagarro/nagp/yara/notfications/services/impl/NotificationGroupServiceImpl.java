package com.nagarro.nagp.yara.notfications.services.impl;

import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nagarro.nagp.amcart.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara.notfications.repositories.NotificationGroupRepository;
import com.nagarro.nagp.yara.notfications.services.INotificationGroupService;

@Service
public class NotificationGroupServiceImpl implements INotificationGroupService {

	@Autowired
	private NotificationGroupRepository notificationGroupRepository;

	@Autowired
	private RestTemplate restTemplate;

	@Value("${infra.gateway.host}")
	private String gatewayHost;

	@Value("${infra.gateway.port}")
	private String gatewayPort;

	@Value("${profile.service.mapping}")
	private String profileServiceMapping;

	@Value("${profile.service.getUsersByIdsMapping}")
	private String getUsersByIdsMapping;

	@Override
	@Transactional(readOnly = true)
	public Collection<UserDTO> getUsersByGroupId(final Long groupId)
			throws JsonParseException, JsonMappingException, RestClientException, IOException {
		final List<String> userIds = notificationGroupRepository.findById(groupId).get().getNotificationGroupMembers()
				.stream().map(notificationGroupMember -> notificationGroupMember.getUserId())
				.collect(Collectors.toList());
		final List<UserDTO> users = new ObjectMapper().readValue(
				restTemplate.postForObject(getUsersByIdsApiUrl(), userIds, String.class),
				new TypeReference<List<UserDTO>>() {
				});
		System.out.println("Users fetched!!");
		return users;
	}

	private String getUsersByIdsApiUrl() {
		return "http://" + gatewayHost + ":" + gatewayPort + profileServiceMapping + getUsersByIdsMapping;
	}

}
