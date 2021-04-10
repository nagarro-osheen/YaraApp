package com.nagarro.nagp.yara.assetmanagement.document-app.inventory.document;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {

	/**
	 * Id of the product
	 */
	@Id
	private ObjectId id;
	public Product() {
		
	}
	
	public Product(ObjectId id, String productCode, Category categoryId, String productName, String description,
			List<String> tags, List<ReviewDTO> reviews, double price, String mainImageUrl, List<String> imageUrls,
			double ratings, boolean returnable, String additionalInfo, double saleDiscount, boolean featuredProduct,
			List<Map<String, String>> variants, List<Object> specifications) {
		super();
		this.id = id;
		this.productCode = productCode;
		this.categoryId = categoryId;
		this.productName = productName;
		this.description = description;
		this.tags = tags;
		this.reviews = reviews;
		this.price = price;
		this.mainImageUrl = mainImageUrl;
		this.imageUrls = imageUrls;
		this.ratings = ratings;
		this.returnable = returnable;
		this.additionalInfo = additionalInfo;
		this.saleDiscount = saleDiscount;
		this.featuredProduct = featuredProduct;
		this.variants = variants;
		this.specifications = specifications;
	}

	private String productCode;
	
	/**
	 * Category id
	 */
	@DBRef
	private Category categoryId;
	
	// Product Name
	private String productName;
	
	private String description;
	
	private List<String> tags;
	
	private List<ReviewDTO> reviews;
	
	private double price;
	
	private String mainImageUrl;
	
	private List<String> imageUrls;
	
	private double ratings;
	
	private boolean returnable;
	
	private String additionalInfo;
	
	private double saleDiscount;
	
	private boolean featuredProduct;
	
	private List<Map<String, String>> variants;
	
	private List<Object> specifications;
	
	
	/**
	 * Gets the product code
	 * @return
	 */
	public String getProductCode() {
		return productCode;
	}

	/**
	 * Sets the product code
	 * @param productCode
	 */
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	/**
	 * Get the product description
	 * @return
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Sets the product description
	 * @param description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * Gets the tags of product
	 * @return
	 */
	public List<String> getTags() {
		return tags;
	}
	
	/**
	 * Sets the product tags
	 * @param tags
	 */
	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	/**
	 * Get the product reviews
	 * @return
	 */
	public List<ReviewDTO> getReviews() {
		return reviews;
	}

	/**
	 * Sets the product reviews
	 * @param reviews
	 */
	public void setReviews(List<ReviewDTO> reviews) {
		this.reviews = reviews;
	}

	/**
	 * Gets the price of product
	 * @return
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * Set the price of product
	 * @param price
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * Gets the main image url
	 * @return
	 */
	public String getMainImageUrl() {
		return mainImageUrl;
	}

	/**
	 * Sets the main image url
	 * @param mainImageUrl
	 */
	public void setMainImageUrl(String mainImageUrl) {
		this.mainImageUrl = mainImageUrl;
	}

	/**
	 * Get the secondary image urls
	 * @return
	 */
	public List<String> getImageUrls() {
		return imageUrls;
	}

	/**
	 * Sets the secondary image urls
	 * @param imageUrls
	 */
	public void setImageUrls(List<String> imageUrls) {
		this.imageUrls = imageUrls;
	}

	/**
	 * Gets the ratings
	 * @return
	 */
	public double getRatings() {
		return ratings;
	}

	/**
	 * Sets the ratings of product
	 * @param ratings
	 */
	public void setRatings(double ratings) {
		this.ratings = ratings;
	}

	/**
	 * Gets the product is returnable
	 * @return
	 */
	public boolean isReturnable() {
		return returnable;
	}

	/**
	 * Sets the product returnable
	 * @param returnable
	 */
	public void setReturnable(boolean returnable) {
		this.returnable = returnable;
	}

	/**
	 * Gets the additional info
	 * @return
	 */
	public String getAdditionalInfo() {
		return additionalInfo;
	}

	/**
	 * Sets the additional info
	 * @param additionalInfo
	 */
	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	/**
	 * Gets the sale discount on a product
	 * @return
	 */
	public double getSaleDiscount() {
		return saleDiscount;
	}

	/**
	 * Sets the sale discount on product
	 * @param saleDiscount
	 */
	public void setSaleDiscount(double saleDiscount) {
		this.saleDiscount = saleDiscount;
	}

	/**
	 * Returns true if product is features
	 * @return
	 */
	public boolean isFeaturedProduct() {
		return featuredProduct;
	}

	/**
	 * Sets true if product is featured
	 * @param featuredProduct
	 */
	public void setFeaturedProduct(boolean featuredProduct) {
		this.featuredProduct = featuredProduct;
	}

	/**
	 * Gets the variants of a product
	 * @return
	 */
	public List<Map<String,String>> getVariants() {
		return variants;
	}

	/**
	 * Sets the product variants
	 * @param variants
	 */
	public void setVariants(List<Map<String, String>> variants) {
		this.variants = variants;
	}

	/**
	 * Gets the product specifications
	 * @return
	 */
	public List<Object> getSpecifications() {
		return specifications;
	}

	/**
	 * Sets the product specification
	 * @param specifications
	 */
	public void setSpecifications(List<Object> specifications) {
		this.specifications = specifications;
	}

	/**
	 * Gets the id of the product
	 * @return
	 */
	public ObjectId getId() {
		return id;
	}

	/**
	 * Sets the product id
	 * @param id
	 */
	public void setId(ObjectId id) {
		this.id = id;
	}
	
	/**
	 * Gets the id of category
	 * @return
	 */
	public Category getCategoryId() {
		return categoryId;
	}

	/**
	 * Set the category id
	 * @param categoryId
	 */
	public void setCategoryId(Category categoryId) {
		this.categoryId = categoryId;
	}

	/**
	 * Gets the product name
	 * @return
	 */
	public String getProductName() {
		return productName;
	}

	/**
	 * Sets the product name
	 * @param productName
	 */
	public void setProductName(String productName) {
		this.productName = productName;
	}

}
