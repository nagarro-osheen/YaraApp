import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductItem } from '../models/product-item.model';
import { ToastService } from '../toast.service';
import {ProductConstants} from '../constants/products';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, 
              private toastService:ToastService,
              private inventoryService: InventoryService) { }
  products:ProductItem[];
  p: number = 1;
  totalLength: Number;  

  ngOnInit() {
    this.inventoryService.getProductCount().subscribe(
      data => {
        this.totalLength = data['data'];
      }, 
      error => {
        this.toastService.showError(
          ProductConstants.ERROR_OCCURRED, 
          ProductConstants.ERROR_FETCHING_TOTAL_PRODUCTS);
      }
    )
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data['data'].content;
      }, 
      error => {
        this.toastService.showError(
          ProductConstants.ERROR_OCCURRED,
          ProductConstants.ERROR_FETCHING_PRODUCTS);
      }
    )
  }

  // pageChanged(event) {
  //   debugger;
  //   this.productService.getAllProducts(2).subscribe(
  //     data => {
  //       this.products = data['data'].content;
  //     }, 
  //     error => {
  //       this.toastService.showGenericBackendError();
  //     }
  //   )

  
}
