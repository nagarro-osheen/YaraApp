package com.nagarro.nagp.yara.notfications.services-app.notfications.services;

import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.yara-app.exception.ACTechnicalException;

public interface INotificationService {

	public void sendNotification(NotificationDTO notificationDTO) throws ACTechnicalException;
}
