package com.nagarro.nagp.yara.leavemanagement.services.impl-app.ordermanagement.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.models.Wishlist;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.OrderItemRepository;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.WishlistRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.IWishlistService;

@Service
@Transactional
public class WishlistServiceImpl implements IWishlistService {

	/** The user repo. */
	@Autowired
	private WishlistRepository wishlistRepo;

	/** The user repo. */
	@Autowired
	private OrderItemRepository orderItemRepo;

	private static final Logger LOGGER = Logger.getLogger(WishlistServiceImpl.class.getName());

	@Override
	public List<OrderItem> getWishlistItems(final Long id) {
		try {
			final Wishlist cart = wishlistRepo.findByUserId(id);
			return cart.getOrderItems();
		} catch (final Exception exception) {
			LOGGER.severe("Exception found on cart page is : " + exception);
			return new ArrayList<>();
		}
	}

	@Override
	public Wishlist addProductsToWishlist(final Long id, final OrderItem orderItem) {
		Wishlist wishlist;
		boolean productFound = false;
		try {
			if (wishlistRepo.findByUserId(id) != null) {
				wishlist = wishlistRepo.findByUserId(id);
				final List<OrderItem> orderItems = wishlist.getOrderItems();
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
					return saveDataInRepository(new OrderItem(), orderItem, wishlist, orderItems);
				}
				return wishlist;
			} else {
				wishlist = new Wishlist();
				wishlist.setUserId(id);
				final OrderItem item = new OrderItem();
				final List<OrderItem> orderItems = new ArrayList<>();
				return saveDataInRepository(item, orderItem, wishlist, orderItems);
			}
		} catch (final Exception exception) {
			LOGGER.severe("Exception found on cart page is : " + exception);
			return null;
		}
	}

	@Override
	public List<OrderItem> editWishlist(final Long id, final OrderItem orderItem) {
		this.orderItemRepo.deleteByWishlistAndProductAndVariant(wishlistRepo.findByUserId(id), orderItem.getProductId(),
				orderItem.getVariantId());
		return wishlistRepo.findByUserId(id).getOrderItems();
	}

	private Wishlist saveDataInRepository(final OrderItem item, final OrderItem orderItem, final Wishlist wishlist,
			final List<OrderItem> orderItems) {
		item.setPrice(orderItem.getPrice());
		item.setQuantity(orderItem.getQuantity());
		item.setProductId(orderItem.getProductId());
		item.setVariantId(orderItem.getVariantId());
		item.setColor(orderItem.getColor());
		item.setImageURL(orderItem.getImageURL());
		item.setProductName(orderItem.getProductName());
		item.setSize(orderItem.getSize());
		// item.setSubtotal(orderItem.getPrice() * orderItem.getQuantity());
		item.setWishlist(wishlist);
		orderItems.add(item);
		wishlist.setOrderItems(orderItems);
		this.wishlistRepo.save(wishlist);
		this.orderItemRepo.save(item);
		return wishlist;
	}
}