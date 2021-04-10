package com.nagarro.nagp.yara.notfications.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara.notfications.models.NotificationTemplate;

public interface NotificationTemplateRepository extends JpaRepository<NotificationTemplate, Long> {

	List<NotificationTemplate> findByName(String name);

}
