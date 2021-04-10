package com.nagarro.nagp.yara.claimmanagement.repositories-app.ordermanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.nagarro.nagp.yara-app.ordermanagement.models.Wishlist;


public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
	
	public Wishlist findByUserId(Long id);
	
	@Modifying
	void deleteByUserId(Long userId);
	
}
