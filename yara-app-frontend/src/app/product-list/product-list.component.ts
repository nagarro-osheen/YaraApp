import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product-item.model';
import {InventoryService} from "../inventory.service";
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  
  products:ProductItem[];
  totalRecords:number=0;
  pageSize:number=5;
  pageNumber:number=1;

  constructor(private inventoryService: InventoryService,private toastService:ToastService) { }
  
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.inventoryService.getProducts({
      pageSize:this.pageSize,
      page:this.pageNumber
    })
    .subscribe((res:any)=>{
       this.initListing(res.data);
    },(error=>{
      this.toastService.showGenericBackendError();
    }))
  }

  initListing(data:any){
    this.products = data.content.map(product=>{
      let quantity = 0;
      if(product.variants){
        product.variants.forEach(variant=>{
          quantity+=variant.quantity;
        })
      }
      return {
        id: product.id,
        code: product.productCode,
        name: product.productName,
        price: product.price,
        description: product.description,
        quantity:quantity
      };
    })
    
    this.totalRecords=data.totalElements;
  }

  deleteProduct(productId:string){
    this.inventoryService.deleteProduct(productId)
      .subscribe(res=>{
        this.getProducts();
        this.toastService.showSuccess("Product Deleted","Succesfully deleted Product");
      },(error=>{
        this.toastService.showGenericBackendError();
      }))
  }

  paginate(event){
    this.pageNumber = (event.first/this.pageSize)+1;
    this.getProducts();
  }

}
