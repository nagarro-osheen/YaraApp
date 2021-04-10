package com.nagarro.nagp.amcart.notfications.mediums;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import com.nagarro.nagp.amcart.common.notifications.dto.UserDTO;
import com.nagarro.nagp.amcart.notfications.dto.NotificationContentDTO;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Component
public class SMSMedium extends NotificationMedium {

	private static final PhoneNumber ADMIN_CONTACT = new PhoneNumber("+13092471951");

	private static final String ACCOUNT_SID = "AC293e1136290e2e0061a90f194f0a860d";

	private static final String AUTH_TOKEN = "42fb53a948023de145d483d86ed432d7";

	static {
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
	}

	@Override
	public void sendNotification(UserDTO user, NotificationContentDTO notificationContentDTO) {
		if (!StringUtils.isEmpty(user.getContact())) {
			Message message = Message.creator(new PhoneNumber(user.getContact()), ADMIN_CONTACT, "Hello!").create();
			System.out.println("Notification sent via SMS: " + message.getSid());
		}
	}

}
