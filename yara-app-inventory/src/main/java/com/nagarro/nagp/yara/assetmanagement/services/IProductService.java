
package com.nagarro.nagp.yara.assetmanagement.services-app.inventory.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;

import com.nagarro.nagp.yara-app.exception.ACTechnicalException;
import com.nagarro.nagp.yara-app.inventory.document.Category;
import com.nagarro.nagp.yara-app.inventory.document.Product;
import com.nagarro.nagp.yara-app.inventory.document.ProductDTO;
import com.nagarro.nagp.yara-app.inventory.document.ReviewDTO;

public interface IProductService {

	public Page<Product> getAllProducts(int pageNumber, int pageSize, String orderBy, String direction);

	public List<Product> getAllProductsByCategory(ObjectId id);

	public Product getProductDetails(String id) throws ACTechnicalException;

	public Product createProduct(ProductDTO newProduct);

	public Product createReview(String id, ReviewDTO review);

	public Product editReview(String id, int index, ReviewDTO review);

	public Product editProduct(ProductDTO prod, ObjectId id);

	public void deleteProduct(String id);

	public List<Product> getAllFeaturedProducts(ObjectId id);

	public List<Product> getAllOutOfStockProducts(ObjectId id);

	public List<Product> addSaleDiscountOnCategory(Category cat, double discount);

	public Long getTotalProductsLength();

	public List<Product> getProductsDetails(List<String> ids);

}
