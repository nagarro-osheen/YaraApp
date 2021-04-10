package com.nagarro.nagp.yara.notfications.models-app.notfications.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class NotificationGroup {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	@OneToMany(mappedBy = "notficationGroup")
	private List<NotificationGroupMembers> notificationGroupMembers;

	public Long getId() {
		return id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	public List<NotificationGroupMembers> getNotificationGroupMembers() {
		return notificationGroupMembers;
	}

	public void setNotificationGroupMembers(final List<NotificationGroupMembers> notificationGroupMembers) {
		this.notificationGroupMembers = notificationGroupMembers;
	}

}
