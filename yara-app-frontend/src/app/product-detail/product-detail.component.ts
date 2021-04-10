import { Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductItem } from '../models/product-item.model';
import { ToastService } from '../toast.service';
import { ProductConstants } from '../constants/products';
import { InventoryService } from '../inventory.service';
import { Location } from '@angular/common';
import { CompareProductService } from '../compare-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  quantity: number =1;
  productId: String;
  productItem: ProductItem;
  colors = [];
  sizes = [];
  review: Object;
  stock: String;
  inStock: Boolean;
  subtotal:any;
  cartProduct:any = {
}
  activeTab: String;
  enableZoom: Boolean;
  rating: number;
  tweetMsg: String;
  @ViewChild('zoomPicContainer') zoomPicContainer: ElementRef;
  @ViewChild('reviewForm') reviewForm: any;

  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private toastService: ToastService,
    private inventoryService: InventoryService,
    private compareService: CompareProductService
    ) { }

  ngOnInit() {
    this.inStock = true;
    this.tweetMsg = ProductConstants.TWEET_MSG;
    this.activeTab = ProductConstants.DESCRIPTION_TAB;
    this.productId = this.route.snapshot.params['id'];  
    this.productService.getProductDetail(this.productId).subscribe(
      data => {
        this.productItem = data['data'];
        this.fetchAllVariants(data['data']);
      },
      error => {
        this.toastService.showGenericBackendError();
      }
    )
  }

  ngAfterViewInit() {
   this.zoomPicContainer.nativeElement.style.display =  "none";
  }

  addCount(value){
    //  var $count = $(this).parent().find('.count');
      var val = parseInt(value,10);
      this.quantity = val+1;
     // $count.val(val+1);
      return false;
  }
  reduceCount(value){
   //   var $count = $(this).parent().find('.count');
      var val = parseInt(value,10);
      if(val > 0)
      this.quantity= val-1;
      return false;
  }

  addCart(product){
   // console.log(JSON.stringify(product));
   this.cartProduct.productId= product.id;
   this.cartProduct.productName = product.productName;
   this.cartProduct.price=product.price;
   this.cartProduct.imageURL =product.mainImageUrl;
   this.cartProduct.variantId =product.variants[0].id;
   this.cartProduct.color=product.variants[0].color;
   this.cartProduct.size=product.variants[0].size;
   this.cartProduct.quantity=this.quantity;
   this.cartProduct.subtotal=this.subtotal;

 //   product.productId = product.id;
  //   product.variantId = product.variantId;
    // product.quantity = product.quantity;
    //product.price = product.price;
   // product.quantity = this.quantity;
    console.log(JSON.stringify(product));
    this.productService.addItemtoCart(this.cartProduct).subscribe(
      data => {
        if (data) {
          this.toastService.showSuccess("Product Added","Succesfully added product into cart");
   //       alert("success "+data);
        } else {
          this.toastService.showGenericBackendError();
//          alert("failed");
        }
      },
      err => console.log(err)
    );
    console.log(JSON.stringify(product));
  }

  addWishlist(product){
  	this.cartProduct.productId= product.id;
	this.cartProduct.productName = product.productName;
	this.cartProduct.price=product.price;
	this.cartProduct.imageURL =product.mainImageUrl;
	this.cartProduct.variantId =product.variants[0].id;
	this.cartProduct.color=product.variants[0].color;
	this.cartProduct.size=product.variants[0].size;
	this.cartProduct.quantity=this.quantity;
	this.cartProduct.subtotal=this.subtotal;
    this.productService.addItemtoWishlist(this.cartProduct).subscribe(
      data => {
        if (data) {
          this.toastService.showSuccess("Product Added","Succesfully added product into wishlist");
         // alert("success "+data);
        } else {
          this.toastService.showGenericBackendError();
  //        alert("failed");
        }
      },
      err => console.log(err)
    );
  }
  fetchAllVariants(data) {
    var colors = [];
    var sizes = [];
    data.variants.forEach(function(data){
        colors.push(data.color);
        sizes.push(data.size);
    });
    this.colors = colors;
    this.sizes = sizes;
  }

  handleColorChange(index) {
    if( this.productItem.variants[index]['quantity'] > 0) {
      this.stock = 'IN STOCK'
      this.inStock = true;
    } else {
      this.stock = 'OUT STOCK';
      this.inStock = false;
    }
  }

  submitReview(reviewForm) {
    reviewForm.form.value.ratings = this.rating;
    this.inventoryService.addProductReview(this.productId, reviewForm.form.value)
    .subscribe(
      data => {
        this.toastService.showSuccess(
          ProductConstants.SUCCESS_MSG, ProductConstants.REVIEW_SUCCESS);
        this.reviewForm.reset();
        this.productItem['reviews'] = data['data'].reviews;
      },
      error => {
        this.toastService.showError(
          ProductConstants.ERROR_OCCURRED, ProductConstants.REVIEW_ERROR);
      }
    )
  }

  
  switchTab(tab) {
    this.activeTab = tab;
  }

  scroll(el) {
    this.activeTab = ProductConstants.REVIEW_TAB;
    el.scrollIntoView();
  }

  zoomout() {
    this.zoomPicContainer.nativeElement.style.display =  "none";
  }

  addToCompare() {
    if(this._isProductOfSameCateory()) {
      const productAdded = this.compareService.addToCompare(this.productItem);
      if(!productAdded.isError) {
        this.toastService.showSuccess(ProductConstants.SUCCESS_MSG, ProductConstants.COMPARE_PRODUCT_SUCCESS);
      } else {
        this.toastService.showError(ProductConstants.ERROR_OCCURRED, productAdded.error);
      }
    }
  }

  _isProductOfSameCateory() {
    let isProductSameCat = true;
    if(this.compareService.getCategory() && 
    this.compareService.getCategory() != this.productItem.categoryId['name']) {
      this.toastService.showError(ProductConstants.ERROR_OCCURRED, ProductConstants.SAME_CATEGORY_COMPARISON_ALLOWED_ERROR);
      isProductSameCat = false;
      
    }
    return isProductSameCat;
  }

  imageZoom(imgID, resultID) {
    // let zoomedArea = document.getElementById("zoomedPic");
    // zoomedArea.setAttribute("class", "display: none");
    this.zoomPicContainer.nativeElement.style.display =  "block";
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  // addCart(){
  //   this.router.navigateByUrl('/checkout');
  // }

}
