package com.nagarro.nagp.yara.notfications.services;

import java.io.IOException;
import java.util.Collection;

import org.springframework.web.client.RestClientException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.nagarro.nagp.amcart.common.notifications.dto.UserDTO;

public interface INotificationGroupService {

	Collection<UserDTO> getUsersByGroupId(Long groupId)
			throws JsonParseException, JsonMappingException, RestClientException, IOException;

}
