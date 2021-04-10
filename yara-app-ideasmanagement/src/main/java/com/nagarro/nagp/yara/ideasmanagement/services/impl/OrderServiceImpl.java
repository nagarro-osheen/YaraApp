package com.nagarro.nagp.yara.ideasmanagement.services.impl-app.ordermanagement.services.impl;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.PurchaseOrder;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.OrderRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.IAddressService;
import com.nagarro.nagp.yara-app.ordermanagement.services.IOrderItemService;
import com.nagarro.nagp.yara-app.ordermanagement.services.IOrderService;

@Service
public class OrderServiceImpl implements IOrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private IOrderItemService orderItemService;

	@Autowired
	private IAddressService addressService;

	@Override
	public PurchaseOrder placeOrder(final PurchaseOrder order) {
		order.setCreatedBy("" + order.getUserId());
		order.setCreatedTime(LocalDateTime.now());
		order.setModifiedTime(LocalDateTime.now());
		final PurchaseOrder placedOrder = orderRepository.save(order);
		orderItemService.updateOrderItemsWithOrder(order.getOrderItems(), placedOrder.getOrderId());
		addressService.updateAddressesWithOrder(order.getAddresses(), placedOrder.getOrderId());
		return placedOrder;
	}

	@Override
	public PurchaseOrder getOrder(final Long orderId) {
		return orderRepository.findById(orderId).get();
	}

	@Override
	public PurchaseOrder getRecentOrderForUser(final Long userId) {
		return orderRepository.findByUserIdOrderByCreatedTimeDesc(userId);
	}

}
