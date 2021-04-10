package com.nagarro.nagp.yara.workflowmanagement.api-app.ordermanagement.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.services.IOrderItemService;

@RestController
@RequestMapping("/orderitem")
@CrossOrigin(value = "http://localhost:4200")
public class OrderItemController {

	@Autowired
	private IOrderItemService orderItemService;

	@PutMapping("/batchUpdate/{cartId}")
	public void batchUpdateOrderItems(@RequestBody final List<OrderItem> orderItems,
			@PathVariable("cartId") final Long cartId) {
		this.orderItemService.updateOrderItems(orderItems, cartId);
	}

	@PostMapping("/batchDelete")
	public void batchDeleteOrderItems(@RequestBody final List<OrderItem> orderItems) {
		this.orderItemService.deleteOrderItems(orderItems);
	}

}
