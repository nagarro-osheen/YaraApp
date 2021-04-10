package com.nagarro.nagp.yara.employeemanagement.api-app.api;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.common.notifications.NotificationPublisher;
import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationDTO;
import com.nagarro.nagp.yara-app.common.notifications.dto.NotificationMediumEnum;
import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;

@RestController
@RequestMapping("/sendnotification")
public class ProfileNotificationSender {

	@Autowired
	private NotificationPublisher notificatioPublisher;

	@GetMapping(value = "/")
	public void sendMessage() throws InterruptedException {
		// while (true) {
		final NotificationDTO notificationDTO = new NotificationDTO();
		notificationDTO.setMediums(Arrays.asList(NotificationMediumEnum.SMS));
		final UserDTO user = new UserDTO();
		user.setEmail("saksham63@gmail.com");
		user.setUserId("saksham63");
		user.setName("Saksham Gupta");
		user.setContact("+918308795789");
		notificationDTO.setName("Hello");
		notificationDTO.setUserDTO(user);
		notificationDTO.setGroupId(1L);
		notificatioPublisher.publishNotification(notificationDTO);
		System.out.println("Message Sent!");
//			Thread.sleep(2000);
//		}
	}

}
