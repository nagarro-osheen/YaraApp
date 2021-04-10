import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ReviewModel } from './models/review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartProduct:any = {
      "orderItemId":"",
      "orderId":"",
      "productId":"",
      "variantId":"",
      "quantity":"",
      "price":""
  }
  httpPrefix: string = environment.httpPrefix;
  inventoryPrefix: string = environment.inventoryUrl;
  inventoryUrl: string = this.httpPrefix + this.inventoryPrefix;

  constructor(private httpClient: HttpClient,private http:HttpClient) {
    
   }


   getAllProducts(page = 1) {
    return this.httpClient.get(this.inventoryUrl + 
      "?page=" + page + "&pageSize=" + 100 );
   }

   getProductDetail(id: String) {
    return this.httpClient.get(this.inventoryUrl + id);
   }
//   localhost:8084/order/cart/{userid}
   addItemtoCart(product){
    console.log('added obj: ' +JSON.stringify(product));
    return this.http.post("http://10.175.28.18:8084/cart/1", product);
   //return this.http.put("http://10.175.28.18:8084/cart/"+product.id, product);
   }

   addItemtoWishlist(product){
    return this.http.post("http://10.175.28.18:8084/order/wishlist/1", product);
   // return this.http.put("http://10.175.28.18:8084/order/wishlist/"+product.id, product);
   }

   getProductsByIds(productIds: string[]): Observable<any> {
     return this.http.post(this.inventoryUrl+'getByIds/', productIds);
   }

}
