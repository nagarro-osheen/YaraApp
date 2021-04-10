import { Component, OnInit } from '@angular/core';
import { WishlistService } from "../wishlist.service";
import { ProductService } from "../product.service";
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishData:any = {};
  quantity: number =1;

  cartProduct:any = {
    "orderItemId":"",
    "orderId":"",
    "productId":"",
    "variantId":"",
    "quantity":"",
    "price":""
}
  constructor(private wishlistService :WishlistService, private productService: ProductService) { }

  ngOnInit() {
    this.getWishlist();
  }

  getWishlist(){
    this.wishlistService.getWishlist().subscribe(
      data => {
        this.wishData = data;
         console.log('wish obj: '+JSON.stringify(this.wishData));
      }, err => console.log(err),
      () => console.log('complete')
    )
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
    this.cartProduct.orderItemId = product.orderItemId;
    this.cartProduct.orderId = product.orderId;
    this.cartProduct.productId = product.id;
    this.cartProduct.variantId = product.variantId;
    this.cartProduct.quantity = product.quantity;
    this.cartProduct.price = product.price;
    product.quantity = this.quantity;
    this.productService.addItemtoCart(this.cartProduct).subscribe(
      data => {
        if (data) {
          alert("success "+data);
        } else {
          alert("failed");
        }
      },
      err => console.log(err)
    );
    console.log(JSON.stringify(product));
  }

}
