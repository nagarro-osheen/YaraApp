/**
 *
 */
package com.nagarro.nagp.yara.assetmanagement.services.impl-app.inventory.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.exception.ACTechnicalException;
import com.nagarro.nagp.yara-app.inventory.document.Category;
import com.nagarro.nagp.yara-app.inventory.document.Product;
import com.nagarro.nagp.yara-app.inventory.document.ProductDTO;
import com.nagarro.nagp.yara-app.inventory.document.ReviewDTO;
import com.nagarro.nagp.yara-app.inventory.repositories.ProductRepository;
import com.nagarro.nagp.yara-app.inventory.services.ICategoryService;
import com.nagarro.nagp.yara-app.inventory.services.IProductService;

@Component
@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private ICategoryService categoryService;

	@SuppressWarnings("deprecation")
	@Override
	public Page<Product> getAllProducts(final int pageNumber, final int pageSize, final String sort,
			final String direction) {
		PageRequest request;
		request = PageRequest.of(pageNumber - 1, pageSize, Sort.by(direction, sort));
		return productRepo.findAll(request);
	}

	@Override
	public List<Product> getAllProductsByCategory(final ObjectId id) {
		return productRepo.findByCategoryId(id);
	}

	@Override
	public Product getProductDetails(final String id) throws ACTechnicalException {
		try {
			return productRepo.findById(id).get();

		} catch (final NoSuchElementException nse) {
			throw new ACTechnicalException("Product not found");
		}
	}

	@Override
	public Product createProduct(final ProductDTO prod) {
		final Product newProduct = new Product();
		BeanUtils.copyProperties(prod, newProduct);
		// Find category by the id and then save
		final Category category = categoryService.getCategoryById(prod.getCategoryId());
		newProduct.setCategoryId(category);
		setIdForVariants(prod, newProduct);
		return productRepo.save(newProduct);
	}

	@Override
	public Product editProduct(final ProductDTO prod, final ObjectId id) {
		final Product newProduct = new Product();
		BeanUtils.copyProperties(prod, newProduct);
		newProduct.setId(id);
		final Category category = categoryService.getCategoryById(prod.getCategoryId());
		newProduct.setCategoryId(category);
		setIdForVariants(prod, newProduct);
		return this.productRepo.save(newProduct);
	}

	private Product setIdForVariants(final ProductDTO prod, final Product newProduct) {
		final List<Map<String, String>> variants = prod.getVariants();
		for (int index = 0; index < variants.size(); index++) {
			final Map<String, String> variant = variants.get(index);
			if (!variant.containsKey("id")) {
				// No id present, insert a UUID
				variant.put("id", UUID.randomUUID().toString());
			}
		}
		newProduct.setVariants(prod.getVariants());
		return newProduct;
	}

	@Override
	public void deleteProduct(final String id) {
		// TO DO
		this.productRepo.deleteById(id);
	}

	@Override
	public List<Product> getAllFeaturedProducts(final ObjectId id) {
		return this.productRepo.findByFeaturedProduct(id);
	}

	@Override
	public List<Product> getAllOutOfStockProducts(final ObjectId id) {
		return this.productRepo.findByVariantQuantity(id);
	}

	@Override
	public List<Product> addSaleDiscountOnCategory(final Category cat, final double discount) {
		// TO DO
//		prod.setId(id);
//		return this.productRepo.save(prod);
		return null;
	}

	/**
	 * Method to get the total products count
	 */
	@Override
	public Long getTotalProductsLength() {
		return this.productRepo.count();
	}

	/**
	 * Method to create a review of product id
	 *
	 */
	@Override
	public Product createReview(final String id, final ReviewDTO review) {
		// TO DO
		final Product product = productRepo.findById(id).get();
		List<ReviewDTO> reviews = product.getReviews();
		if (reviews == null) {
			reviews = new ArrayList<ReviewDTO>();
		}
		reviews.add(review);
		product.setReviews(reviews);

		productRepo.save(product);
		return product;
	}

	@Override
	public List<Product> getProductsDetails(final List<String> ids) {
		return (List<Product>) this.productRepo.findAllById(ids);
	}

	@Override
	public Product editReview(final String id, final int index, final ReviewDTO review) {
		final Product product = productRepo.findById(id).get();
		final List<ReviewDTO> reviews = product.getReviews();
		reviews.set(index, review);
		product.setReviews(reviews);
		productRepo.save(product);
		return product;
	}

}
