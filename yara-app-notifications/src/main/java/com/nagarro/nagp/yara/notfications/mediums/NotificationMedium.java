package com.nagarro.nagp.yara.notfications.mediums-app.notfications.mediums;

import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.notfications.dto.NotificationContentDTO;

public abstract class NotificationMedium {
	
	public abstract void sendNotification(UserDTO user, NotificationContentDTO notificationContentDTO);

}
