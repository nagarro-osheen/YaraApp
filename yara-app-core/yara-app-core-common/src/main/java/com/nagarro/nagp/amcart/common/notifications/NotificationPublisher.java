package com.nagarro.nagp.yara-app.common.notifications;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nagarro.nagp.yara-app.amqp.notifications.Constants;

@Component
public class NotificationPublisher {

	@Autowired
	private AmqpTemplate amqpNotificationsTemplate;

	public void publishNotification(Object data) {
		amqpNotificationsTemplate.convertAndSend(Constants.NOTIFICATIONS_QUEUE_EXCHANGE,
				Constants.NOTIFICATIONS_ROUTING_KEY, data);
	}

}
