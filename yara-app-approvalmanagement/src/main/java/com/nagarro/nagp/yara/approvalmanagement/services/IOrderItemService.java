package com.nagarro.nagp.yara.approvalmanagement.services-app.ordermanagement.services;

import java.util.List;

import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;

public interface IOrderItemService {

	void updateOrderItems(List<OrderItem> orderItems, Long cartId);

	void deleteOrderItems(List<OrderItem> orderItems);

	void updateOrderItemsWithOrder(List<OrderItem> orderItems, Long orderId);

}
