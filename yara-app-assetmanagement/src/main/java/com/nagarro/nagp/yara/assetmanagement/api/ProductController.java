/**
 *
 */
package com.nagarro.nagp.yara.assetmanagement.api-app.inventory.api;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.ACTechnicalException;
import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.inventory.document.Product;
import com.nagarro.nagp.yara-app.inventory.document.ProductDTO;
import com.nagarro.nagp.yara-app.inventory.document.ReviewDTO;
import com.nagarro.nagp.yara-app.inventory.services.IProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(value = "http://localhost:4200")
public class ProductController {

	@Autowired
	private IProductService productService;

	@GetMapping("/length")
	public BaseResponse<Long> totalProducts() {
		return new BaseResponse<>(productService.getTotalProductsLength());
	}

	@GetMapping("/")
	public BaseResponse<Page<Product>> getAllProducts(
			@RequestParam(defaultValue = "1", required = false) final int page,
			@RequestParam(defaultValue = "8", required = false) final int pageSize,
			@RequestParam(defaultValue = "asc", required = false) final String direction,
			@RequestParam(defaultValue = "productCode", required = false) final String sort) {
		System.out.println("direction:::: " + direction);
		return new BaseResponse<>(productService.getAllProducts(page, pageSize, sort, direction));
	}

	@GetMapping("/category/{id}")
	public BaseResponse<List<Product>> getAllProductsOfCategory(@PathVariable final ObjectId id) {
		return new BaseResponse<>(productService.getAllProductsByCategory(id));
	}

	@GetMapping("/{id}")
	public BaseResponse<Product> getProductDetails(@PathVariable final String id) throws ACTechnicalException {
		return new BaseResponse<>(productService.getProductDetails(id));
	}

	@PostMapping("/getByIds/")
	public BaseResponse<List<Product>> getProductsDetails(@RequestBody final List<String> ids)
			throws ACTechnicalException {
		return new BaseResponse<>(productService.getProductsDetails(ids));
	}

	@GetMapping("/featured/{id}")
	public BaseResponse<List<Product>> getFeaturedProducts(@PathVariable final ObjectId id) {
		return new BaseResponse<>(productService.getAllFeaturedProducts(id));
	}

	@GetMapping("/outofstock/{id}")
	public BaseResponse<List<Product>> getOutOfStockProducts(@PathVariable final ObjectId id) {
		return new BaseResponse<>(productService.getAllOutOfStockProducts(id));
	}

	@PostMapping("/")
	public BaseResponse<Product> createProduct(@RequestBody final ProductDTO prod) {
		return new BaseResponse<>(productService.createProduct(prod));
	}

	@PostMapping("/{id}/review")
	public BaseResponse<Product> createReview(@PathVariable final String id, @RequestBody final ReviewDTO review) {
		return new BaseResponse<>(productService.createReview(id, review));
	}

	@PutMapping("/{id}/review/{index}")
	public BaseResponse<Product> editReview(@PathVariable final String id, @PathVariable final int index,
			@RequestBody final ReviewDTO review) {
		return new BaseResponse<>(productService.editReview(id, index, review));
	}

	@PutMapping("/{id}")
	public BaseResponse<Product> editProduct(@PathVariable final ObjectId id, @RequestBody final ProductDTO prod) {
		return new BaseResponse<>(productService.editProduct(prod, id));
	}

	@DeleteMapping("/{id}")
	public void deleteCategory(@PathVariable final String id) {
		productService.deleteProduct(id);
	}

}
