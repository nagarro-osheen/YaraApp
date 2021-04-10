package com.nagarro.nagp.yara.notfications.repositories-app.notfications.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara-app.notfications.models.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
