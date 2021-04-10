package com.nagarro.nagp.yara.notfications.api-app.notfications.api;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nagarro.nagp.yara-app.amqp.notifications.Constants;
import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.yara-app.notfications.services.INotificationService;

@Component
public class NotificationEventListener {

	@Autowired
	private INotificationService notificationService;

	@RabbitListener(queues = { Constants.NOTIFICATIONS_QUEUE_NAME })
	public void processNotification(final NotificationDTO notification) {
		try {
			notificationService.sendNotification(notification);
		} catch (final Exception e) {
			e.printStackTrace();
		}
	}

}
