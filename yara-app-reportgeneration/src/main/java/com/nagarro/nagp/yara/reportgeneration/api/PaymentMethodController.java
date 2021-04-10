package com.nagarro.nagp.yara.reportgeneration.api-app.ordermanagement.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.ordermanagement.models.PaymentMethod;
import com.nagarro.nagp.yara-app.ordermanagement.services.PaymentMethodService;

@RestController
@RequestMapping(value = "/paymentmethod")
@CrossOrigin(value = "http://localhost:4200")
public class PaymentMethodController {

	@Autowired
	private PaymentMethodService paymentMethodService;

	@GetMapping("/")
	public BaseResponse<List<PaymentMethod>> getPaymentMethods() {
		return new BaseResponse<List<PaymentMethod>>(paymentMethodService.getAllPaymentMethods());
	}

}
