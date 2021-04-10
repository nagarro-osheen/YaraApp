import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { OrderItem } from './models/order-item.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpPrefix = environment.httpPrefix;

  cartApi = this.httpPrefix+ "/order/cart/";

  orderItemApi = this.httpPrefix + "/order/orderitem/";

  constructor(private http:HttpClient) { }
  //TODO To come from environemnt
  baseUrl: string = 'http://localhost:8082/';

  getCart() {
   return this.http.get("http://localhost:8084/cart/1");
//    return this.http.get(this.baseUrl+"cart/");
  }

  getCartForUser(): Observable<any> {
    return this.http.get(this.cartApi+'user/1/');
  }

  removeOrderItems(orderItems: OrderItem[]): Observable<any> {
    return this.http.post(this.orderItemApi+'batchDelete', orderItems);
  } 

  updateOrderItems(orderItems: OrderItem[], cartId: number): Observable<any> {
    return this.http.put(this.orderItemApi+'batchUpdate/'+cartId, orderItems);
  }

}
