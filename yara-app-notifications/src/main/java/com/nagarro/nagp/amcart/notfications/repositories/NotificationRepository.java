package com.nagarro.nagp.amcart.notfications.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.amcart.notfications.models.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
