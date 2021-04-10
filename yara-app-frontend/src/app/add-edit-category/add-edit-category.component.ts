import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ToastService } from '../toast.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  categories:any[];
  path:string='';

  @ViewChild("form")
  form:any;

  editCategoryId:string;

  constructor(private inventoryService: InventoryService, private toastService: ToastService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.inventoryService.getCategories()
      .subscribe((res: any) => {
        this.initCategories(res.data);
      }, (error => {
        this.toastService.showGenericBackendError();
      }))
    this.route.paramMap.subscribe(params=>{
      let categoryId = params.get('id');
      if(categoryId){
        //Edit Form.
        this.editCategoryId = categoryId;
        this.inventoryService.getCategory(categoryId)
        .subscribe((res:any)=>{
            this.initFormEditData(res.data);
        })
      }
    })
  }

  initFormEditData(category:any){
    let formControls = this.form.controls;
    Object.keys(this.form.controls).forEach(function(elem){
      formControls[elem].setValue(category[elem]);
    })

  }

  initCategories(data: any) {
    this.categories = data;
  }

  updatePath(event,name){
    let parentPath = '';
    if(event){
      this.categories.forEach(function(category){
        if(category.id==event){
          parentPath=category.path+"/";
        }
      });
    }
    this.path=parentPath+name;
  }

  submitForm(value:any){
    value.path=this.path;
    this.inventoryService.createCategory(value)
        .subscribe(resp=>{
          this.toastService.showSuccess("Category Added", `${value.name} added`)
          this.router.navigate(['/profile/inventory/categories'])
        },error=>{
          this.toastService.showGenericBackendError();
        })
  }

  submitEdit(value:any){
    value.path=this.path;
    this.inventoryService.editCategory(this.editCategoryId,value)
        .subscribe(resp=>{
          this.toastService.showSuccess("Category saved", `${value.name} saved`)
          this.router.navigate(['/profile/inventory/categories'])
        },error=>{
          this.toastService.showGenericBackendError();
        })
  }

}
