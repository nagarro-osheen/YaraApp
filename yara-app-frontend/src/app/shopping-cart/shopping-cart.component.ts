import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  implements OnInit  {
quantity:number=1;
cartData:any={};
  constructor(private cartService: CartService) { }

  ngOnInit() {
   this.getCart();
    }


      getCart() {
        this.cartService.getCart().subscribe(
          data => {
            this.cartData = data;
             console.log(JSON.stringify(this.cartData));
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

updateCart(product){

}
}
