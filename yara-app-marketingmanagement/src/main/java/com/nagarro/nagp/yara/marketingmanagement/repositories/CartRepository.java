package com.nagarro.nagp.yara.marketingmanagement.repositories-app.ordermanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

	Cart findByUserId(Long userId);

	@Modifying
	void deleteByUserId(Long userId);

}
