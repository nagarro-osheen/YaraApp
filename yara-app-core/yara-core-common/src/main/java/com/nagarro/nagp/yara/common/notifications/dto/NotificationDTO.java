package com.nagarro.nagp.yara.common.notifications.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = NotificationDTO.class)
public class NotificationDTO {

	// This field is used via reflection. Getter is removed to avoid confusion.
	private UserDTO userDTO;

	private String name;

	private List<NotificationMediumEnum> mediums;

	private Long groupId;

	public static String getUserDTOFieldName() {
		return "userDTO";
	}

	@Deprecated
	public UserDTO getUserDTO() {
		return userDTO;
	}

	public void setUserDTO(final UserDTO userDTO) {
		this.userDTO = userDTO;
	}

	public List<NotificationMediumEnum> getMediums() {
		return mediums;
	}

	public void setMediums(final List<NotificationMediumEnum> mediums) {
		this.mediums = mediums;
	}

	public String getName() {
		return name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(final Long groupId) {
		this.groupId = groupId;
	}

}
