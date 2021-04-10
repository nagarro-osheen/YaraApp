package com.nagarro.nagp.amcart.notfications.services;

import com.nagarro.nagp.amcart.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.amcart.exception.ACTechnicalException;

public interface INotificationService {

	public void sendNotification(NotificationDTO notificationDTO) throws ACTechnicalException;
}
