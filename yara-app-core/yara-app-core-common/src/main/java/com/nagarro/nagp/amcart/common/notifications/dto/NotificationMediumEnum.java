package com.nagarro.nagp.yara-app.common.notifications.dto;

public enum NotificationMediumEnum {
	
	EMAIL("email"), SMS("sms");
	
	private final String medium;
	
	private NotificationMediumEnum(String medium) {
		this.medium = medium;
	}

	public String getMedium() {
		return medium;
	}
	

}
