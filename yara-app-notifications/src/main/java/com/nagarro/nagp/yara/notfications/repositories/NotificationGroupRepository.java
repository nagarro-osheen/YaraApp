package com.nagarro.nagp.yara.notfications.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara.notfications.models.NotificationGroup;

public interface NotificationGroupRepository extends JpaRepository<NotificationGroup, Long> {

}
