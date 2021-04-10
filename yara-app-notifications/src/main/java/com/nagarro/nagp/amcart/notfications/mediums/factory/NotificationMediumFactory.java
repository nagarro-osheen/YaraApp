package com.nagarro.nagp.amcart.notfications.mediums.factory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nagarro.nagp.amcart.notfications.constants.Constants;
import com.nagarro.nagp.amcart.notfications.mediums.EmailMedium;
import com.nagarro.nagp.amcart.notfications.mediums.NotificationMedium;
import com.nagarro.nagp.amcart.notfications.mediums.SMSMedium;

@Component
public class NotificationMediumFactory {

	@Autowired
	private EmailMedium emailMedium;

	@Autowired
	private SMSMedium smsMedium;

//	public NotificationMedium getNotificationMedium(NotificationMediumEnum medium) {
//		NotificationMedium notificationMedium = null;
//		switch (medium) {
//			case EMAIL: {
//				notificationMedium = emailMedium;
//				break;
//			}
//			case SMS: {
//				notificationMedium = new SMSMedium();
//				break;
//			}
//		}
//		return notificationMedium;
//	}

	public NotificationMedium getNotificationMedium(String medium) {
		NotificationMedium notificationMedium = null;
		if (Constants.EMAIL_MEDIUM.equalsIgnoreCase(medium)) {
			notificationMedium = emailMedium;
		} else {
			notificationMedium = smsMedium;
		}
		return notificationMedium;
	}

}
