package com.nagarro.nagp.yara.reportgeneration.services.impl-app.ordermanagement.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.PaymentMethod;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.PaymentMethodRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.PaymentMethodService;

@Service
public class PaymentMethodServiceImpl implements PaymentMethodService {

	@Autowired
	private PaymentMethodRepository paymentMethodRepository;

	@Override
	public List<PaymentMethod> getAllPaymentMethods() {
		return paymentMethodRepository.findAll();
	}

}
