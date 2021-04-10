package com.nagarro.nagp.yara.marketingmanagement.repositories-app.ordermanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.nagp.yara-app.ordermanagement.models.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

}
