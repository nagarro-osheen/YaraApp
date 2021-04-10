package com.nagarro.nagp.yara.notfications.services;

import com.nagarro.nagp.amcart.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.amcart.exception.ACTechnicalException;

public interface INotificationService {

	public void sendNotification(NotificationDTO notificationDTO) throws ACTechnicalException;
}
