package com.nagarro.nagp.yara.payment.services-app.ordermanagement.services;

import java.util.List;

import com.nagarro.nagp.yara-app.ordermanagement.models.PaymentMethod;

public interface PaymentMethodService {

	List<PaymentMethod> getAllPaymentMethods();

}
