import { Injectable } from '@angular/core';
import { ProductItem } from './models/product-item.model';
import { ProductConstants } from './constants/products';

@Injectable({
  providedIn: 'root'
})
export class CompareProductService {

  compareProduct: ProductItem[] = [];
  category: String;
  
  constructor() { 
   
  }

  public getAllCompareProductList() {
    return this.compareProduct;
  }

  public isItemInProductList(code: String) {
    
  }

  public getCategory() {
    return this.category;
  }

  public addToCompare(product: ProductItem) {
    if(this.compareProduct.length == 0) {
      // Set the default category
      this.category = product.categoryId['name'];
    }
    if(this.compareProduct.length >=4 ) {
      return {
        isError: true,
        error: ProductConstants.COMPARE_DENIED
      };
    } else {
      this.compareProduct.push(product);
      return {
        isError: false
      }
    }
  }

}
