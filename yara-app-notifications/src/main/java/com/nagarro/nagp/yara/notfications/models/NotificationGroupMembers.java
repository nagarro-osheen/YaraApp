package com.nagarro.nagp.yara.notfications.models-app.notfications.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class NotificationGroupMembers {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private NotificationGroup notficationGroup;

	private String userId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public NotificationGroup getNotficationGroup() {
		return notficationGroup;
	}

	public void setNotficationGroup(NotificationGroup notficationGroup) {
		this.notficationGroup = notficationGroup;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
