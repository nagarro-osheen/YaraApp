import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewModel } from '../models/review.model';
import { ProductService } from '../product.service';
import { ToastService } from '../toast.service';
import { ProductConstants } from '../constants/products';
import { ProductItem } from '../models/product-item.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit, OnDestroy {

  reviews: Array<ReviewModel>
  product: ProductItem;
  constructor(private route: ActivatedRoute, 
              private productService: ProductService,
              private toastService: ToastService,
              private inventoryService: InventoryService) { }

  ngOnInit() {
    this.productService.getProductDetail(this.route.params['value'].id)
    .subscribe(
      data => {
       this.reviews = data['data'].reviews;
       this.product = data['data'];
      }, 
      error => {
        this.toastService.showError(ProductConstants.ERROR_OCCURRED,
          ProductConstants.ERROR_FETCHING_REVIEW);
      }
    )
  }

  likeReview(index) {
    let review = this.reviews[index];
    if (!review['likes']) {
      review["likes"] = 0;
    }
    review['likes'] += 1;

    this.editReview(this.product['id'], review, index);
  }

  dislikeReview(index) {
    let review = this.reviews[index];
    if (!review['dislike']) {
      review["dislike"] = 0;
    }
    review['dislike'] += 1;
    this.editReview(this.product['id'], review, index);
  }

  editReview(id, review, index) {
    this.inventoryService.editReview(id, index, review)
    .subscribe(
      data => {
        this.reviews = data['data'].reviews;
      }, 
      error => {
        this.toastService.showError(ProductConstants.ERROR_OCCURRED, 
          "")
      }
    )
  }

  ngOnDestroy() {
    // this.inventoryService
  }

}
