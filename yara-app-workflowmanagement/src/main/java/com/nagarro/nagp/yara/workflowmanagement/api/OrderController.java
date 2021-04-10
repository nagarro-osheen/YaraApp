package com.nagarro.nagp.yara.workflowmanagement.api-app.ordermanagement.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.ordermanagement.models.PurchaseOrder;
import com.nagarro.nagp.yara-app.ordermanagement.services.IOrderService;

@RestController
@RequestMapping(value = "/order")
@CrossOrigin(value = "http://localhost:4200")
public class OrderController {

	@Autowired
	private IOrderService orderService;

	@PostMapping("/")
	public BaseResponse<PurchaseOrder> placeOrder(@RequestBody final PurchaseOrder order) {
		return new BaseResponse<PurchaseOrder>(orderService.placeOrder(order));
	}

	@GetMapping("/{id}")
	public BaseResponse<PurchaseOrder> getOrder(@PathVariable("id") final Long orderId) {
		return new BaseResponse<PurchaseOrder>(orderService.getOrder(orderId));
	}

	@GetMapping("/{userId}/recent/")
	public BaseResponse<PurchaseOrder> getRecentOrder(@PathVariable("userId") final Long userId) {
		return new BaseResponse<PurchaseOrder>(orderService.getRecentOrderForUser(userId));
	}

}
