package com.nagarro.nagp.yara.payment.repositories-app.ordermanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara-app.ordermanagement.models.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
