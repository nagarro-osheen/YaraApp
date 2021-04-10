package com.nagarro.nagp.yara.repositories-app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.nagarro.nagp.yara-app.models.Address;

/**
 * The Interface AddressRepository.
 */
public interface AddressRepository extends JpaRepository<Address, Long> {

	/**
	 * Find by user id.
	 *
	 * @param userId the user id
	 * @return the list
	 */
	List<Address> findByUserId(Long userId);

	@Modifying
	void deleteAllByUserId(Long userId);

}
