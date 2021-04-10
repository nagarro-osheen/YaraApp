import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReviewModel } from './models/review.model';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }
  //TODO To come from environemnt
  httpPrefix: string = environment.httpPrefix;
  inventoryPrefix: string = environment.inventoryUrl;
  categoryPrefix: string = environment.categoryUrl;
  inventoryUrl: string = this.httpPrefix + this.inventoryPrefix;
  categoryUrl: string = this.httpPrefix + this.categoryPrefix;

  getProducts(pageData:any) {
    return this.http.get(this.inventoryUrl, {params:pageData});
  }

  getProduct(id:string){
    return this.http.get(this.inventoryUrl + id);
  }

  createProduct(product:any){
    return this.http.post(this.inventoryUrl, product);
  }

  deleteProduct(productId:string){
    return this.http.delete(this.inventoryUrl + productId);
  }

  editProduct(productId:string,product:any){
    return this.http.put(this.inventoryUrl + productId, product);
  }

  editReview(productId: string, index: number, review: ReviewModel) {
    return this.http.put(this.inventoryUrl + productId + "/review/" + index, review);
  }

  /**
   * Implement
   * @param productId
   * @param review 
   */
  addProductReview(productId, review: ReviewModel) {
    return this.http.post(this.inventoryUrl + productId + "/review", review);
  }

  getProductCount() {
    return this.http.get(this.inventoryUrl + "length");
   }

  getCategories(){
    return this.http.get(this.categoryUrl);
  }

  createCategory(category:any){
    return this.http.post(this.categoryUrl,category);
  }

  getCategory(categoryId:any){
    return this.http.get(this.categoryUrl + categoryId);
  }

  deleteCategory(categoryId:string){
    return this.http.delete(this.categoryUrl + categoryId);
  }

  editCategory(categoryId:string,category:any){
    return this.http.put(this.categoryUrl + categoryId,category);
  }

  

}
