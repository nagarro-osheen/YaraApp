import { Component, OnInit } from '@angular/core';
import { CompareProductService } from '../compare-product.service';
import { ProductItem } from '../models/product-item.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compareList: ProductItem[] = [];
  variantsArray = [];

  constructor(private compareService: CompareProductService) { }

  ngOnInit() {
   this.compareList = this.compareService.getAllCompareProductList();

   // TO DO : Do similar things for specifications
    this.compareList.forEach((item, index) => {
      let obj = {}
      item.variants.forEach((variant, i) => {
        // Each variant here is an object.
        Object.entries(variant).forEach(
          ([key, value]) => {
            if(obj[key]) {
              // If any key already exist then append value in it
             let valueAtThatPoint = obj[key];
             valueAtThatPoint.push(value);
             obj[key] = valueAtThatPoint;
            } else {
              // No key created, create one with value as an array;
              obj[key] = [value];
            }
          }
        );
      });
      console.log('obj ready : ', obj);
      this.variantsArray.push(obj);      
    });    
    console.log(this.variantsArray);
    }
  
}
