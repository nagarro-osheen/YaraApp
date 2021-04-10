package com.nagarro.nagp.yara.notfications.mediums-app.notfications.mediums;

import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.notfications.constants.Constants;
import com.nagarro.nagp.yara-app.notfications.dto.NotificationContentDTO;

@Component
public class EmailMedium extends NotificationMedium {

	@Value("${notifications.email.from.address}")
	private String fromAddress;

	@Value("${notifications.email.from.password}")
	private String fromAddressPassword;

	@Value("${notifications.email.smtp}")
	private String smtpHost;

	@Value("${notifications.email.port}")
	private String emailPort;

	private Properties properties = System.getProperties();

	@PostConstruct
	public void init() {
		properties.put(Constants.EMAIL_SMTP_PORT, emailPort);
		properties.put(Constants.EMAIL_SMTP_AUTH, Constants.EMAIL_SMTP_AUTH_VALUE);
		properties.put(Constants.EMAIL_SMTP_STARTTLS_ENABLE, Constants.EMAIL_SMTP_STARTTLS_ENABLE_VALUE);
		properties.put(Constants.EMAIL_SMTP_HOST, smtpHost);
	}

	@Override
	public void sendNotification(UserDTO user, NotificationContentDTO notificationContentDTO) {
		if (!StringUtils.isEmpty(user.getEmail())) {
			try {
				Session session = createSession();
				sendEmail(getEmailMessage(notificationContentDTO, user, session), session);
				System.out.println("Email sent!");
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	private Session createSession() {
		return Session.getInstance(properties, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(fromAddress, fromAddressPassword);
			}
		});
	}

	private void sendEmail(MimeMessage emailMessage, Session session) throws MessagingException {
		Transport.send(emailMessage);
//		Transport transport = session.getTransport(Constants.EMAIL_TRANSPORT_PROTOCOL);
//		transport.connect(smtpHost, fromAddress, fromAddressPassword);
//		transport.sendMessage(emailMessage, emailMessage.getAllRecipients());
//		transport.close();
	}

	private MimeMessage getEmailMessage(NotificationContentDTO notificationContentDTO, UserDTO user, Session session)
			throws MessagingException {
		MimeMessage emailMessage = new MimeMessage(session);
		emailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(user.getEmail()));
		emailMessage.setSubject(notificationContentDTO.getSubject());
		emailMessage.setContent(notificationContentDTO.getBody(), Constants.EMAIL_CONTENT_TYPE);
		return emailMessage;
	}

}
