import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ToastService } from '../toast.service';
import { PhotoService } from '../photo.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private toastService: ToastService, private photoService: PhotoService,private router: Router,private route: ActivatedRoute) { }

  specifications = [];
  variants = [];
  categories = [];
  displayPicUrl: string = undefined;
  additionalPhotoUrls: string[] = [];

  @ViewChild('form') form: any;
  editProductId:string;
  ngOnInit() {

    this.inventoryService.getCategories()
      .subscribe((res: any) => {
        res.data.forEach(category => {
          this.categories.push(category);
        })
      }, err => {
        this.toastService.showGenericBackendError();
      })

    this.route.paramMap.subscribe(params=>{
      let productId = params.get('id');
      if(productId){
        //Edit Form.
        this.editProductId = productId;
        this.inventoryService.getProduct(productId)
        .subscribe((res:any)=>{
           this.initFormEditData(res.data);
        })
      }
    })
    
  }

  initFormEditData(product:any){
    let formControls = this.form.controls;
    Object.keys(this.form.controls).forEach(function(elem){
      formControls[elem].setValue(product[elem]);
    })
    formControls.categoryId.setValue(product.categoryId.id);
    this.displayPicUrl=product.mainImageUrl;
    this.additionalPhotoUrls = product.imageUrls;
    this.specifications = product.specifications;
    this.variants = product.variants;
  }

  submitForm(formValue: any) {

    if (this.validateForm(formValue)) {
      this.addProduct(formValue,false);
    }
  }

  submitEdit(formValue: any) {

    if (this.validateForm(formValue)) {
      this.addProduct(formValue,true);
    }
  }

  validateForm(formValue: any): boolean {
    let validity = true;

    if (this.specifications.length == 0) {
      this.toastService.showError("Validation Failed", "Please add specifications");
      validity = false;
    }
    if (this.variants.length == 0) {
      this.toastService.showError("Validation Failed", "Please add variants");
      validity = false;
    }

    return validity;
  }

  uploadDisplayPhoto(event) {
    this.photoService.uploadPhoto(event)
      // this.http.post(this.uploadPath, fd)
      .subscribe(res => {
        this.displayPicUrl = res['secure_url'];
      });
  }

  uploadAdditionalPhoto(event) {
    this.photoService.uploadPhoto(event)
      // this.http.post(this.uploadPath, fd)
      .subscribe(res => {
        this.additionalPhotoUrls.push(res['secure_url']);
      });
  }

  addProduct(formValue: any,edit:boolean) {

    let productReq = Object.assign(formValue, {})
    productReq.mainImageUrl = this.displayPicUrl;
    productReq.variants = this.variants;
    productReq.specifications = this.specifications;
    productReq.imageUrls = this.additionalPhotoUrls;
    if(!edit){
      this.inventoryService.createProduct(productReq)
      .subscribe((res: any) => {
        this.toastService.showSuccess("Product Added", `${productReq.productName} added`)
        this.router.navigate(['/profile/inventory'])
      }, err => {
        this.toastService.showGenericBackendError();
      })
    }else{
      this.inventoryService.editProduct(this.editProductId,productReq)
      .subscribe((res: any) => {
        this.toastService.showSuccess("Product Edited", `${productReq.productName} saved`)
        this.router.navigate(['/profile/inventory'])
      }, err => {
        this.toastService.showGenericBackendError();
      })
    }
   

  }

}
