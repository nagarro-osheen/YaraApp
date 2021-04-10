import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:any=[];
  
  constructor(private inventoryService:InventoryService,private toastService:ToastService) { }
  
  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.inventoryService.getCategories()
    .subscribe((res:any)=>{
       this.initListing(res.data);
    },(error=>{
      this.toastService.showGenericBackendError();
    }))
  }

  initListing(data:any){
    this.categories=data;
  }

  deleteCategory(id:string){
    this.inventoryService.deleteCategory(id)
    .subscribe(res=>{
      this.getCategories();
      this.toastService.showSuccess("Category Deleted","Succesfully deleted Category");
    },(error=>{
      this.toastService.showGenericBackendError();
    }))
  }

}
