package com.nagarro.nagp.amcart.notfications.mediums;

import com.nagarro.nagp.amcart.common.notifications.dto.UserDTO;
import com.nagarro.nagp.amcart.notfications.dto.NotificationContentDTO;

public abstract class NotificationMedium {
	
	public abstract void sendNotification(UserDTO user, NotificationContentDTO notificationContentDTO);

}
