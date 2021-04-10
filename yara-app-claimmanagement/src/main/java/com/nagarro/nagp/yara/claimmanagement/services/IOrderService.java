package com.nagarro.nagp.yara.claimmanagement.services-app.ordermanagement.services;

import com.nagarro.nagp.yara-app.ordermanagement.models.PurchaseOrder;

public interface IOrderService {

	PurchaseOrder placeOrder(PurchaseOrder order);

	PurchaseOrder getOrder(Long orderId);

	PurchaseOrder getRecentOrderForUser(Long userId);
}
