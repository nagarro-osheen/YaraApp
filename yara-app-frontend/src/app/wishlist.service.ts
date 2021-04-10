import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  //TODO To come from environemnt
  baseUrl: string = 'http://localhost:8082/';

  getWishlist() {
   return this.http.get("http://localhost:8084/cart/1");
//    return this.http.get(this.baseUrl+"cart/");
  }

}
