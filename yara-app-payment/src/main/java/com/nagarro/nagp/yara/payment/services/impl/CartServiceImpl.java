package com.nagarro.nagp.yara.payment.services.impl-app.ordermanagement.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.CartRepository;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.OrderItemRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.ICartService;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	/** The cart repo. */
	@Autowired
	private CartRepository cartRepo;

	/** The order item repo. */
	@Autowired
	private OrderItemRepository orderItemRepo;

	private static final Logger LOGGER = Logger.getLogger(CartServiceImpl.class.getName());

	@Override
	public List<OrderItem> getItemsInCart(final Long id) {
		try {
			final Cart cart = cartRepo.findByUserId(id);
			return cart.getOrderItems();
		} catch (final Exception exception) {
			LOGGER.severe("Exception found on cart page is : " + exception);
			return new ArrayList<>();
		}
	}

	@Override
	public List<OrderItem> editCart(final Long id, final Cart cart) {
		this.orderItemRepo.deleteAllByCart(cartRepo.findByUserId(id));
		this.cartRepo.deleteByUserId(id);
		final List<OrderItem> orderItems = cart.getOrderItems();
		final Cart newCart = new Cart();
		newCart.setUserId(id);
		final Iterator<OrderItem> iterator = orderItems.iterator();
		while (iterator.hasNext()) {
			final OrderItem item = iterator.next();
			item.setCart(newCart);
		}
		newCart.setOrderItems(orderItems);
		this.cartRepo.save(newCart);
		this.orderItemRepo.saveAll(orderItems);
		return newCart.getOrderItems();
	}

	@Override
	public Cart addProductsToCart(final Long id, final OrderItem orderItem) {
		Cart cart;
		boolean productFound = false;
		try {
			if (cartRepo.findByUserId(id) != null) {
				cart = cartRepo.findByUserId(id);
				final List<OrderItem> orderItems = cart.getOrderItems();
				final Iterator<OrderItem> iterator = orderItems.iterator();
				while (iterator.hasNext()) {
					final OrderItem item = iterator.next();
					if (item.getProductId().equalsIgnoreCase(orderItem.getProductId())
							&& item.getVariantId().equalsIgnoreCase(orderItem.getVariantId())) {
						productFound = true;
						final int quantity = item.getQuantity() + orderItem.getQuantity();
						item.setQuantity(quantity);
					}
				}
				if (!productFound) {
					return saveDataInRepository(new OrderItem(), orderItem, cart, orderItems);
				}
				return cart;
			} else {
				cart = new Cart();
				cart.setUserId(id);
				final OrderItem item = new OrderItem();
				final List<OrderItem> orderItems = new ArrayList<>();
				return saveDataInRepository(item, orderItem, cart, orderItems);
			}
		} catch (final Exception exception) {
			LOGGER.severe("Exception found on cart page is : " + exception);
			return null;
		}
	}

	@Override
	public Cart getItemsInCartByUserId(final Long userId) {
		return cartRepo.findByUserId(userId);
	}

	private Cart saveDataInRepository(final OrderItem item, final OrderItem orderItem, final Cart cart,
			final List<OrderItem> orderItems) {
		item.setPrice(orderItem.getPrice());
		item.setQuantity(orderItem.getQuantity());
		item.setProductId(orderItem.getProductId());
		item.setVariantId(orderItem.getVariantId());
		item.setCart(cart);
		orderItems.add(item);
		cart.setOrderItems(orderItems);
		this.cartRepo.save(cart);
		this.orderItemRepo.save(item);
		return cart;
	}
}