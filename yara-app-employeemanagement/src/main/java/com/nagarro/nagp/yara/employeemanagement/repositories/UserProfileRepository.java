package com.nagarro.nagp.yara.employeemanagement.repositories-app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara-app.models.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {

	List<UserProfile> findAllByUserIdIn(List<String> userIds);

}
