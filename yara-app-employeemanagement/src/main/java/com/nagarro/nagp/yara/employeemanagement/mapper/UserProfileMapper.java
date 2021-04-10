package com.nagarro.nagp.yara.employeemanagement.mapper-app.mapper;

import java.util.ArrayList;
import java.util.List;

import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.models.UserProfile;

public final class UserProfileMapper {

	public static List<UserDTO> getUserDTOsFromUserProfiles(final List<UserProfile> userProfiles) {
		final List<UserDTO> users = new ArrayList<>();
		for (final UserProfile userProfile : userProfiles) {
			users.add(getUserDTOFromUserProfile(userProfile));
		}
		return users;
	}

	private static UserDTO getUserDTOFromUserProfile(final UserProfile userProfile) {
		final UserDTO userDTO = new UserDTO();
		userDTO.setContact(userProfile.getPhone());
		userDTO.setEmail(userProfile.getEmail());
		userDTO.setName(userProfile.getFirstName());
		return userDTO;
	}

}
