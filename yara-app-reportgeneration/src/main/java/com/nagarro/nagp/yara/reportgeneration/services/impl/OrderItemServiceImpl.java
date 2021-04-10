package com.nagarro.nagp.yara.reportgeneration.services.impl-app.ordermanagement.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.models.PurchaseOrder;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.OrderItemRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.IOrderItemService;

@Service
public class OrderItemServiceImpl implements IOrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Override
	public void updateOrderItems(final List<OrderItem> orderItems, final Long cartId) {
		orderItems.stream().forEach(orderItem -> orderItem.setCart(new Cart(cartId)));
		this.orderItemRepository.saveAll(orderItems);
	}

	@Override
	public void deleteOrderItems(final List<OrderItem> orderItems) {
		this.orderItemRepository.deleteAll(orderItems);
	}

	@Override
	public void updateOrderItemsWithOrder(final List<OrderItem> orderItems, final Long orderId) {
		orderItems.stream().forEach(orderItem -> {
			orderItem.setCart(null);
			orderItem.setPurchaseOrder(new PurchaseOrder(orderId));
		});
		this.orderItemRepository.saveAll(orderItems);
	}

}
