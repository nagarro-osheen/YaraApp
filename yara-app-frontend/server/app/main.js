(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-edit-category/add-edit-category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/add-edit-category/add-edit-category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-edit-category/add-edit-category.component.html":
/*!********************************************************************!*\
  !*** ./src/app/add-edit-category/add-edit-category.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3 *ngIf=\"!editCategoryId\">Add Category</h3>\n    <h3 *ngIf=\"editCategoryId\">Edit Category</h3>\n    <form #form=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"form-group\">\n              <label class=\"type-text\">Name<br><input type=\"text\" (ngModelChange)=\"updatePath(form.value.parent,$event)\" name=\"name\" class=\"form-control placeholder-fix\"  required ngModel></label>\n           </div>\n           <div class=\"form-group\">\n              <label class=\"type-text\">Parent<br>\n                <select class=\"form-control placeholder-fix\" name=\"parent\" (ngModelChange)=\"updatePath($event,form.value.name)\"  ngModel>\n                    <option *ngFor=\"let c of categories\"  [value]=\"c.id\">{{c.name}} ({{c.path}})</option>\n                  </select>\n              </label>\n           </div>\n           <div class=\"form-group\">\n              <label class=\"type-text\">Path<br><input disabled name=\"path\" type=\"text\"  class=\"form-control placeholder-fix\"  required [(ngModel)]=\"path\" ></label>\n           </div>\n    </div>\n    </div>\n    <div class=\"row\">\n        <button *ngIf=\"!editCategoryId\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-warning pull-right\"  (click)=\"submitForm(form.value)\">Add Category</button>\n        <button *ngIf=\"editCategoryId\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-warning pull-right\"  (click)=\"submitEdit(form.value)\">Save Category</button>\n    </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/add-edit-category/add-edit-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-edit-category/add-edit-category.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCategoryComponent", function() { return AddEditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditCategoryComponent = /** @class */ (function () {
    function AddEditCategoryComponent(inventoryService, toastService, router, route) {
        this.inventoryService = inventoryService;
        this.toastService = toastService;
        this.router = router;
        this.route = route;
        this.path = '';
    }
    AddEditCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getCategories()
            .subscribe(function (res) {
            _this.initCategories(res.data);
        }, (function (error) {
            _this.toastService.showGenericBackendError();
        }));
        this.route.paramMap.subscribe(function (params) {
            var categoryId = params.get('id');
            if (categoryId) {
                //Edit Form.
                _this.editCategoryId = categoryId;
                _this.inventoryService.getCategory(categoryId)
                    .subscribe(function (res) {
                    _this.initFormEditData(res.data);
                });
            }
        });
    };
    AddEditCategoryComponent.prototype.initFormEditData = function (category) {
        var formControls = this.form.controls;
        Object.keys(this.form.controls).forEach(function (elem) {
            formControls[elem].setValue(category[elem]);
        });
    };
    AddEditCategoryComponent.prototype.initCategories = function (data) {
        this.categories = data;
    };
    AddEditCategoryComponent.prototype.updatePath = function (event, name) {
        var parentPath = '';
        if (event) {
            this.categories.forEach(function (category) {
                if (category.id == event) {
                    parentPath = category.path + "/";
                }
            });
        }
        this.path = parentPath + name;
    };
    AddEditCategoryComponent.prototype.submitForm = function (value) {
        var _this = this;
        value.path = this.path;
        this.inventoryService.createCategory(value)
            .subscribe(function (resp) {
            _this.toastService.showSuccess("Category Added", value.name + " added");
            _this.router.navigate(['/profile/inventory/categories']);
        }, function (error) {
            _this.toastService.showGenericBackendError();
        });
    };
    AddEditCategoryComponent.prototype.submitEdit = function (value) {
        var _this = this;
        value.path = this.path;
        this.inventoryService.editCategory(this.editCategoryId, value)
            .subscribe(function (resp) {
            _this.toastService.showSuccess("Category saved", value.name + " saved");
            _this.router.navigate(['/profile/inventory/categories']);
        }, function (error) {
            _this.toastService.showGenericBackendError();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("form"),
        __metadata("design:type", Object)
    ], AddEditCategoryComponent.prototype, "form", void 0);
    AddEditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-category',
            template: __webpack_require__(/*! ./add-edit-category.component.html */ "./src/app/add-edit-category/add-edit-category.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-category.component.css */ "./src/app/add-edit-category/add-edit-category.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddEditCategoryComponent);
    return AddEditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/add-edit-product/add-edit-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-edit-product/add-edit-product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-edit-product/add-edit-product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-edit-product/add-edit-product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Add Product</h3>\r\n  <form #form=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n            <label class=\"type-text\">Name<br><input type=\"text\" name=\"productName\" class=\"form-control placeholder-fix\"  required ngModel></label>\r\n         </div>\r\n         <div class=\"form-group\">\r\n            <label class=\"type-text\">Code<br><input type=\"text\" name=\"productCode\" class=\"form-control placeholder-fix\"  required ngModel></label>\r\n         </div>\r\n         <div class=\"form-group\">\r\n            <label class=\"type-text\">Price<br><input type=\"number\" name=\"price\" class=\"form-control placeholder-fix\"   required ngModel></label>\r\n         </div>\r\n         <div class=\"form-group\">\r\n            <label class=\"type-text\">Category<br>\r\n              <select  class=\"form-control placeholder-fix\" name=\"categoryId\"  required ngModel>\r\n                  <option *ngFor=\"let c of categories\"  [value]=\"c.id\">{{c.name}} ({{c.path}})</option>\r\n                </select>\r\n            </label>\r\n         </div>\r\n         <div class=\"form-group\" >\r\n            <label class=\"type-text\">Specifications<br></label>\r\n            <div class=\"input-group\" ngModelGroup=\"specifications\" *ngFor=\"let spec of specifications;let i=index\">\r\n                <input type=\"text\" class=\"form-control\" name=\"key{{i}}\" placeholder=\"Specification\" [(ngModel)]=\"spec.key\" required/>\r\n                <span class=\"input-group-addon\">-</span>\r\n                <input type=\"text\" class=\"form-control\" name=\"value{{i}}\" placeholder=\"Description\" [(ngModel)]=\"spec.value\"  required/>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn\" (click)=\"specifications.push({});\">Add Spec</button>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n            <label class=\"type-text\">Description<br><textarea type=\"text\" name=\"description\" class=\"form-control placeholder-fix\" required ngModel></textarea></label>\r\n         </div>\r\n         <label class=\"type-text\">Variants<br></label>\r\n         <div class=\"form-group\">\r\n            <div class=\"input-group\"  ngModelGroup=\"variants\" *ngFor=\"let variant of variants;let i=index\">\r\n                <input type=\"text\" class=\"form-control\" name=\"color{{i}}\" placeholder=\"Color\" [(ngModel)]=\"variant.color\" required/>\r\n                <span class=\"input-group-addon\"></span>\r\n                <input type=\"text\" class=\"form-control\" name=\"size{{i}}\" placeholder=\"Size\"  [(ngModel)]=\"variant.size\"  required/>\r\n                <span class=\"input-group-addon\"></span>\r\n                <input type=\"number\" class=\"form-control\" name=\"quantity{{i}}\" placeholder=\"Qty.\"  [(ngModel)]=\"variant.quantity\"  required/>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn\" (click)=\"variants.push({});\">Add Variant</button>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n      <div>\r\n          <label class=\"type-text\">Main Display Photo<br></label>\r\n          <img [src]=\"displayPicUrl\" *ngIf=\"displayPicUrl\"/>\r\n          <input class=\"btn\" type=\"file\" value=\"Upload Display Picture\" (change)=\"uploadDisplayPhoto($event)\"/>\r\n      </div>\r\n      <br><br>\r\n      <div>\r\n            <div *ngFor=\"let additionalPhoto of additionalPhotoUrls\">\r\n            <img [src]=\"additionalPhoto\" />\r\n            </div>\r\n         <label class=\"type-text\">Additional Photos (multiple)<br></label>\r\n         <input class=\"btn\" type=\"file\" value=\"Add\" (change)=\"uploadAdditionalPhoto($event)\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <button type=\"submit\" *ngIf=\"!editProductId\" [disabled]=\"form.invalid\" class=\"btn btn-warning pull-right\"  (click)=\"submitForm(form.value)\">Add Product</button>\r\n      <button type=\"submit\" *ngIf=\"editProductId\"  [disabled]=\"form.invalid\" class=\"btn btn-warning pull-right\"  (click)=\"submitEdit(form.value)\">Save Product</button>\r\n \r\n    </div>\r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/add-edit-product/add-edit-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-edit-product/add-edit-product.component.ts ***!
  \****************************************************************/
/*! exports provided: AddEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProductComponent", function() { return AddEditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo.service */ "./src/app/photo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEditProductComponent = /** @class */ (function () {
    function AddEditProductComponent(inventoryService, toastService, photoService, router, route) {
        this.inventoryService = inventoryService;
        this.toastService = toastService;
        this.photoService = photoService;
        this.router = router;
        this.route = route;
        this.specifications = [];
        this.variants = [];
        this.categories = [];
        this.displayPicUrl = undefined;
        this.additionalPhotoUrls = [];
    }
    AddEditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getCategories()
            .subscribe(function (res) {
            res.data.forEach(function (category) {
                _this.categories.push(category);
            });
        }, function (err) {
            _this.toastService.showGenericBackendError();
        });
        this.route.paramMap.subscribe(function (params) {
            var productId = params.get('id');
            if (productId) {
                //Edit Form.
                _this.editProductId = productId;
                _this.inventoryService.getProduct(productId)
                    .subscribe(function (res) {
                    _this.initFormEditData(res.data);
                });
            }
        });
    };
    AddEditProductComponent.prototype.initFormEditData = function (product) {
        var formControls = this.form.controls;
        Object.keys(this.form.controls).forEach(function (elem) {
            formControls[elem].setValue(product[elem]);
        });
        formControls.categoryId.setValue(product.categoryId.id);
        this.displayPicUrl = product.mainImageUrl;
        this.additionalPhotoUrls = product.imageUrls;
        this.specifications = product.specifications;
        this.variants = product.variants;
    };
    AddEditProductComponent.prototype.submitForm = function (formValue) {
        if (this.validateForm(formValue)) {
            this.addProduct(formValue, false);
        }
    };
    AddEditProductComponent.prototype.submitEdit = function (formValue) {
        if (this.validateForm(formValue)) {
            this.addProduct(formValue, true);
        }
    };
    AddEditProductComponent.prototype.validateForm = function (formValue) {
        var validity = true;
        if (this.specifications.length == 0) {
            this.toastService.showError("Validation Failed", "Please add specifications");
            validity = false;
        }
        if (this.variants.length == 0) {
            this.toastService.showError("Validation Failed", "Please add variants");
            validity = false;
        }
        return validity;
    };
    AddEditProductComponent.prototype.uploadDisplayPhoto = function (event) {
        var _this = this;
        this.photoService.uploadPhoto(event)
            .subscribe(function (res) {
            _this.displayPicUrl = res['secure_url'];
        });
    };
    AddEditProductComponent.prototype.uploadAdditionalPhoto = function (event) {
        var _this = this;
        this.photoService.uploadPhoto(event)
            .subscribe(function (res) {
            _this.additionalPhotoUrls.push(res['secure_url']);
        });
    };
    AddEditProductComponent.prototype.addProduct = function (formValue, edit) {
        var _this = this;
        var productReq = Object.assign(formValue, {});
        productReq.mainImageUrl = this.displayPicUrl;
        productReq.variants = this.variants;
        productReq.specifications = this.specifications;
        productReq.imageUrls = this.additionalPhotoUrls;
        if (!edit) {
            this.inventoryService.createProduct(productReq)
                .subscribe(function (res) {
                _this.toastService.showSuccess("Product Added", productReq.productName + " added");
                _this.router.navigate(['/profile/inventory']);
            }, function (err) {
                _this.toastService.showGenericBackendError();
            });
        }
        else {
            this.inventoryService.editProduct(this.editProductId, productReq)
                .subscribe(function (res) {
                _this.toastService.showSuccess("Product Edited", productReq.productName + " saved");
                _this.router.navigate(['/profile/inventory']);
            }, function (err) {
                _this.toastService.showGenericBackendError();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", Object)
    ], AddEditProductComponent.prototype, "form", void 0);
    AddEditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-product',
            template: __webpack_require__(/*! ./add-edit-product.component.html */ "./src/app/add-edit-product/add-edit-product.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-product.component.css */ "./src/app/add-edit-product/add-edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"], _photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddEditProductComponent);
    return AddEditProductComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profiledetails/profiledetails.component */ "./src/app/profiledetails/profiledetails.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "./src/app/add-edit-product/add-edit-product.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-edit-category/add-edit-category.component */ "./src/app/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product-review/product-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    },
    {
        path: 'product-detail/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        children: [
            {
                path: '',
                component: _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_4__["ProfileDetailsComponent"]
            },
            {
                path: 'inventory',
                component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
                children: [
                    {
                        path: '',
                        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                    },
                    {
                        path: 'categories',
                        component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"],
                    },
                    {
                        path: 'addproduct',
                        component: _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
                    },
                    {
                        path: 'editproduct/:id',
                        component: _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
                    },
                    {
                        path: 'addcategory',
                        component: _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_16__["AddEditCategoryComponent"]
                    },
                    {
                        path: 'editcategory/:id',
                        component: _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_16__["AddEditCategoryComponent"]
                    }
                ]
            },
            {
                path: 'wishlist',
                component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"]
            },
            {
                path: 'order-history',
                component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__["OrderHistoryComponent"]
            }
        ]
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]
    },
    {
        path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"]
    },
    {
        path: 'compare',
        component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_12__["CompareComponent"]
    },
    {
        path: 'shopping-cart',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartComponent"]
    },
    {
        path: 'review/:id',
        component: _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_17__["ProductReviewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<p-toast position=\"top-right\"></p-toast>\r\n    <router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<ngx-ui-loader></ngx-ui-loader>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.service */ "./src/app/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(messageService, toastService) {
        var _this = this;
        this.messageService = messageService;
        this.toastService = toastService;
        this.title = 'amcart-frontend';
        this.toastService.getMessenger().subscribe(function (msg) { return _this.messageService.add(msg); });
    }
    ;
    AppComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profiledetails/profiledetails.component */ "./src/app/profiledetails/profiledetails.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "./src/app/add-edit-product/add-edit-product.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/compare/compare.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./photo.service */ "./src/app/photo.service.ts");
/* harmony import */ var _ngx_ui_loader_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ngx-ui-loader.module */ "./src/app/ngx-ui-loader.module.ts");
/* harmony import */ var _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./add-edit-category/add-edit-category.component */ "./src/app/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product-review/product-review.component.ts");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_41__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"],
                _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_14__["ProfileDetailsComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_17__["CategoryListComponent"],
                _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_18__["AddEditProductComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_21__["ContactPageComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__["WishlistComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_23__["OrderHistoryComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_24__["CompareComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_25__["ProductDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_27__["ProductComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_32__["ShoppingCartComponent"],
                _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_36__["AddEditCategoryComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_40__["ProductReviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_29__["ToastModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_38__["PaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ngx_ui_loader_module__WEBPACK_IMPORTED_MODULE_35__["NgxUILoaderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_37__["NgxPaginationModule"],
                jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_41__["JwSocialButtonsModule"]
            ],
            providers: [_countries_service__WEBPACK_IMPORTED_MODULE_11__["CountriesService"], _profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"], _login_service__WEBPACK_IMPORTED_MODULE_28__["LoginService"], primeng_api__WEBPACK_IMPORTED_MODULE_30__["MessageService"], _toast_service__WEBPACK_IMPORTED_MODULE_31__["ToastService"], _cart_service__WEBPACK_IMPORTED_MODULE_33__["CartService"], _photo_service__WEBPACK_IMPORTED_MODULE_34__["PhotoService"], _wishlist_service__WEBPACK_IMPORTED_MODULE_39__["WishlistService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        //TODO To come from environemnt
        this.baseUrl = 'http://localhost:8082/';
    }
    CartService.prototype.getCart = function () {
        return this.http.get("http://localhost:8084/cart/1");
        //    return this.http.get(this.baseUrl+"cart/");
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/category-list/category-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/category-list/category-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category-list/category-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/category-list/category-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n      <h3>Categories</h3>\r\n      <button routerLink=\"../addcategory\" class=\"btn btn-sec-col pull-right\">Add New Category</button>\r\n    </div>\r\n    <br>\r\n     <p-table [value]=\"categories\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Parent</th>\r\n                <th>Path</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-category>\r\n            <tr>\r\n                <td>{{category.id}}</td>\r\n                <td>{{category.name}}</td>\r\n                <td>{{category.parent}}</td>\r\n                <td>{{category.path}}</td>\r\n                <td><a [routerLink]=\"['../editcategory',category.id]\" ><button class=\"btn\">Edit</button></a>\r\n                  <button class=\"btn\"  (click)=\"deleteCategory(category.id)\">Delete</button></td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    \r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/category-list/category-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-list/category-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(inventoryService, toastService) {
        this.inventoryService = inventoryService;
        this.toastService = toastService;
        this.categories = [];
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.inventoryService.getCategories()
            .subscribe(function (res) {
            _this.initListing(res.data);
        }, (function (error) {
            _this.toastService.showGenericBackendError();
        }));
    };
    CategoryListComponent.prototype.initListing = function (data) {
        this.categories = data;
    };
    CategoryListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.inventoryService.deleteCategory(id)
            .subscribe(function (res) {
            _this.getCategories();
            _this.toastService.showSuccess("Category Deleted", "Succesfully deleted Category");
        }, (function (error) {
            _this.toastService.showGenericBackendError();
        }));
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#accordion-order .big-button .btn-lg {\r\n    font: 14px/54px \"Open Sans\", sans-serif;\r\n    padding: 0;\r\n    width: 250px;\r\n    vertical-align: middle;\r\n}\r\n.btn-third-col {\r\n    background: #060606;\r\n    color: #dccc99;\r\n}"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n   <div class=\"container\">\r\n      <div class=\"row\">\r\n         <div class=\"container checkout-menu\">\r\n            <a href=\"\" class=\"btn btn-yet-col col-sm-3 col-xs-12\">ORDER COMPLETE</a>\r\n            <a href=\"\" class=\"btn btn-yet-col col-sm-3 col-xs-12\">PAYMENT METHOD</a>\r\n            <a href=\"\" class=\"btn btn-yet-col col-sm-3 col-xs-12\">BILLING &amp; SHIPPING</a>\r\n            <a href=\"\" class=\"btn btn-third-col col-sm-3 col-xs-12\">CHECKOUT OPTION</a>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"you-order mobile-collapse col-md-5 col-xs-12 pull-right clearfix\">\r\n            <div class=\"mobile-collapse-header\">YOUR ORDER</div>\r\n\r\n            <div class=\"table_block table-responsive clearfix mobile-collapse-body\" id=\"order-detail-content\">\r\n\r\n               <div class=\"dd-list-empty\">There is no product in it!</div>\r\n               <div class=\"dropdown-product-list\">\r\n                  <table class=\"table\" id=\"cart_summary\">\r\n                     <tbody>\r\n                        <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                           <td class=\"cart_product\">\r\n                              <a href=\"product-page.html\">\r\n                                 <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                              </a>\r\n                           </td>\r\n                           <td class=\"cart_description\">\r\n                              <p class=\"product-name\">\r\n                                 <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                              </p>\r\n                              <div class=\"qty\">1 x <span>$700.00</span></div>\r\n                              <small>Color: <span>Red</span></small>\r\n                              <small>Product Code: <span>12658472</span></small>\r\n                              <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           </td>\r\n                        </tr>\r\n\r\n                        <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                           <td class=\"cart_product\">\r\n                              <a href=\"product-page.html\">\r\n                                 <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-2.jpg\">\r\n                              </a>\r\n                           </td>\r\n                           <td class=\"cart_description\">\r\n                              <p class=\"product-name\">\r\n                                 <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                              </p>\r\n                              <div class=\"qty\">1 x <span>$700.00</span></div>\r\n                              <small>Color: <span>Red</span></small>\r\n                              <small>Product Code: <span>12658472</span></small>\r\n                              <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           </td>\r\n                        </tr>\r\n                        <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                           <td class=\"cart_product\">\r\n                              <a href=\"product-page.html\">\r\n                                 <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-3.jpg\">\r\n                              </a>\r\n                           </td>\r\n                           <td class=\"cart_description\">\r\n                              <p class=\"product-name\">\r\n                                 <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                              </p>\r\n                              <div class=\"qty\">1 x <span>$700.00</span></div>\r\n                              <small>Color: <span>Red</span></small>\r\n                              <small>Product Code: <span>12658472</span></small>\r\n                              <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           </td>\r\n                        </tr>\r\n                     </tbody>\r\n                  </table>\r\n                  <div class=\"container col-xs-12 tfoot\">\r\n                     <p class=\"row info\"><span class=\"pull-left col-xs-6\">Cart Subtotal:</span><span class=\"pull-right col-xs-6 text-right\">$2100.00</span></p>\r\n                     <p class=\"row info\"><span class=\"pull-left col-xs-6\">Shipping:</span><span class=\"pull-right col-xs-6 text-right gray\">Free Shipping</span></p>\r\n                     <p class=\"row info total\"><span class=\"pull-left col-xs-6\">ORDER TOTAL:</span><span class=\"col-xs-6 pull-right text-right\">$2100.00</span></p>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-7 col-xs-12 pull-left\">\r\n            <div id=\"accordion-order\">\r\n               <div class=\"accordion-group panel\">\r\n                  <a href=\"#collapse-1\" data-parent=\"#accordion-order\" data-toggle=\"collapse\" class=\"accordion-header\">\r\n                     CHECKOUT OPTION\r\n                  </a>\r\n                  <div class=\"collapse show\" id=\"collapse-1\" style=\"\">\r\n                     <div class=\"accordion-body\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-md-6 col-xs-12\">\r\n                              <form action=\"#\">\r\n                                 <h6>NEW CUSTOMER</h6>\r\n                                 <p>Register with us for future convenience</p>\r\n                                 <input type=\"checkbox\" class=\"stl\" value=\"2\" name=\"checkbox\" id=\"checkbox1\">\r\n                                 <label class=\"stl checkbox\" for=\"checkbox1\"><span></span>Register Account</label><br>\r\n                                 <input type=\"checkbox\" checked=\"checked\" class=\"stl\" value=\"3\" name=\"checkbox\" id=\"checkbox2\">\r\n                                 <label class=\"stl checkbox\" for=\"checkbox2\"><span></span>Checkout us Guest</label><br>     \r\n                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. veniam, quis nostrud  nostrud exercitation laboris. </p>\r\n                                 <button type=\"submit\" class=\"btn btn-third-col btn-md\">CONTINUE</button>\r\n                              </form>\r\n                           </div>\r\n                           <div class=\"col-md-6 col-xs-12\">\r\n                              <form action=\"#\">\r\n                                 <h6>REGISTERED CUSTOMER</h6>\r\n                                 <p>If you have an account with us, please log in.</p>\r\n                                 <div class=\"form-group\">\r\n                                    <input type=\"email\" placeholder=\"Enter your email *\" class=\"placeholder-fix form-control\" name=\"email\">\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <input type=\"password\" placeholder=\"Enter your password *\" class=\"placeholder-fix form-control\" name=\"password\">\r\n                                 </div>\r\n                                 <input type=\"checkbox\" checked=\"checked\" class=\"stl\" value=\"3\" name=\"checkbox\" id=\"checkbox3\">\r\n                                 <label class=\"stl checkbox\" for=\"checkbox3\"><span></span>Remember Password</label><br>\r\n                                 <button class=\"btn btn-third-col btn-md\" type=\"submit\">LOGIN</button>\r\n                              </form>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"accordion-group panel\">\r\n                  <a href=\"#collapse-2\" data-parent=\"#accordion-order\" data-toggle=\"collapse\" class=\"accordion-header collapsed\">\r\n                     BILLING INFORMATION\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"collapse-2\" style=\"height: 0px;\">\r\n                     <div class=\"accordion-body\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-md-6 col-xs-12\">\r\n                              <h6>PERSONAL DETAIL</h6><br>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"First Name *\" class=\"placeholder-fix form-control\" name=\"f_name\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"Last Name *\" class=\"placeholder-fix form-control\" name=\"l_name\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"email\" placeholder=\"E-mail Address *\" class=\"placeholder-fix form-control\" name=\"email\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"tel\" placeholder=\"Phone *\" class=\"placeholder-fix form-control\" name=\"phone\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"Company \" class=\"placeholder-fix form-control\" name=\"company\">\r\n                              </div>\r\n                              <input type=\"checkbox\" class=\"stl\" value=\"2\" name=\"checkbox\" id=\"checkbox4\">\r\n                              <label class=\"stl checkbox\" for=\"checkbox4\"><span></span>My dilivery and billing addresses are the same</label><br>\r\n                              <input type=\"checkbox\" checked=\"checked\" class=\"stl\" value=\"3\" name=\"checkbox\" id=\"checkbox5\">\r\n                              <label class=\"stl checkbox\" for=\"checkbox5\"><span></span>Ship a different address</label><br> \r\n                           </div>\r\n                           <div class=\"col-md-6 col-xs-12\">\r\n                              <h6>YOUR ADDRESS</h6><br>\r\n                              <div class=\"row\">\r\n                                 <div class=\"required form-group col-xs-12\">\r\n                                    <select class=\"form-control s-styled hasCustomSelect\" name=\"billing-country\" style=\"-webkit-appearance: menulist-button; position: absolute; opacity: 0; height: 43px; font-size: 13px;\">\r\n                                       <option selected=\"\" hidden=\"\">Country</option>\r\n                                       <option value=\"1\">01</option>\r\n                                       <option value=\"2\">02</option>\r\n                                       <option value=\"3\">03</option>\r\n                                       <option value=\"4\">04</option>\r\n                                       <option value=\"5\">05</option>\r\n                                       <option value=\"6\">06</option>\r\n                                       <option value=\"7\">07</option>\r\n                                       <option value=\"8\">08</option>\r\n                                       <option value=\"9\">09</option>\r\n                                       <option value=\"10\">10</option>\r\n                                       <option value=\"11\">11</option>\r\n                                       <option value=\"12\">12</option>\r\n                                       <option value=\"13\">13</option>\r\n                                       <option value=\"14\">14</option>\r\n                                       <option value=\"15\">15</option>\r\n                                       <option value=\"16\">16</option>\r\n                                       <option value=\"17\">17</option>\r\n                                       <option value=\"18\">18</option>\r\n                                       <option value=\"19\">19</option>\r\n                                       <option value=\"20\">20</option>\r\n                                       <option value=\"21\">21</option>\r\n                                       <option value=\"22\">22</option>\r\n                                       <option value=\"23\">23</option>\r\n                                       <option value=\"24\">24</option>\r\n                                       <option value=\"25\">25</option>\r\n                                       <option value=\"26\">26</option>\r\n                                       <option value=\"27\">27</option>\r\n                                       <option value=\"28\">28</option>\r\n                                       <option value=\"29\">29</option>\r\n                                       <option value=\"30\">30</option>\r\n                                       <option value=\"31\">31</option>\r\n                                    </select><span class=\"customSelect form-control s-styled hasCustomSelect\" style=\"display: inline-block;\"><span class=\"customSelectInner\" style=\"width: 100%; display: inline-block;\">Country</span></span>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"Town / City * \" class=\"placeholder-fix form-control\" name=\"city\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"State / Province * \" class=\"placeholder-fix form-control\" name=\"state\">\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <input type=\"text\" placeholder=\"Postcode / Zip * \" class=\"placeholder-fix form-control\" name=\"zip_code\">\r\n                              </div>\r\n                              <input type=\"checkbox\" checked=\"checked\" class=\"stl\" value=\"3\" name=\"checkbox\" id=\"checkbox6\">\r\n                              <label class=\"stl checkbox\" for=\"checkbox6\"><span></span>I have reed and agree to the <a href=\"\">Privacy Policy</a></label><br> \r\n                              <button class=\"btn btn-third-col btn-md\" type=\"submit\">CONTINUE</button>\r\n                           </div>\r\n                           <div class=\"col-xs-12\">\r\n                              <br><h6>SHIPPING ADDRESS</h6><br>\r\n                              <div class=\"row\">\r\n                                 <div class=\"col-md-6 col-xs-12\">\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"First Name *\" class=\"placeholder-fix form-control\" name=\"f_name\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"email\" placeholder=\"E-mail Address *\" class=\"placeholder-fix form-control\" name=\"email\">\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                       <div class=\"required form-group col-xs-12\">\r\n                                          <select class=\"form-control s-styled hasCustomSelect\" name=\"billing-country\" style=\"-webkit-appearance: menulist-button; position: absolute; opacity: 0; height: 43px; font-size: 13px;\">\r\n                                             <option selected=\"\" hidden=\"\">Country</option>\r\n                                             <option value=\"1\">01</option>\r\n                                             <option value=\"2\">02</option>\r\n                                             <option value=\"3\">03</option>\r\n                                             <option value=\"4\">04</option>\r\n                                             <option value=\"5\">05</option>\r\n                                             <option value=\"6\">06</option>\r\n                                             <option value=\"7\">07</option>\r\n                                             <option value=\"8\">08</option>\r\n                                             <option value=\"9\">09</option>\r\n                                             <option value=\"10\">10</option>\r\n                                             <option value=\"11\">11</option>\r\n                                             <option value=\"12\">12</option>\r\n                                             <option value=\"13\">13</option>\r\n                                             <option value=\"14\">14</option>\r\n                                             <option value=\"15\">15</option>\r\n                                             <option value=\"16\">16</option>\r\n                                             <option value=\"17\">17</option>\r\n                                             <option value=\"18\">18</option>\r\n                                             <option value=\"19\">19</option>\r\n                                             <option value=\"20\">20</option>\r\n                                             <option value=\"21\">21</option>\r\n                                             <option value=\"22\">22</option>\r\n                                             <option value=\"23\">23</option>\r\n                                             <option value=\"24\">24</option>\r\n                                             <option value=\"25\">25</option>\r\n                                             <option value=\"26\">26</option>\r\n                                             <option value=\"27\">27</option>\r\n                                             <option value=\"28\">28</option>\r\n                                             <option value=\"29\">29</option>\r\n                                             <option value=\"30\">30</option>\r\n                                             <option value=\"31\">31</option>\r\n                                          </select><span class=\"customSelect form-control s-styled hasCustomSelect\" style=\"display: inline-block;\"><span class=\"customSelectInner\" style=\"width: 100%; display: inline-block;\">Country</span></span>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"State / Province * \" class=\"placeholder-fix form-control\" name=\"state\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-md-6 col-xs-12\">\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"Last Name *\" class=\"placeholder-fix form-control\" name=\"l_name\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"Company \" class=\"placeholder-fix form-control\" name=\"company\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"Town / City * \" class=\"placeholder-fix form-control\" name=\"city\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                       <input type=\"text\" placeholder=\"Postcode / Zip * \" class=\"placeholder-fix form-control\" name=\"zip_code\">\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"accordion-group panel\">\r\n                  <a href=\"#collapse-3\" data-parent=\"#accordion-order\" data-toggle=\"collapse\" class=\"accordion-header collapsed\">\r\n                     SHIPPING METHOD\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"collapse-3\" style=\"height: 0px;\">\r\n                     <div class=\"accordion-body\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-xs-12\">\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"shipping_method\" id=\"airplane\" value=\"Airplane\">\r\n                                 <label for=\"airplane\" class=\"stl\"><span><span></span></span>Airplane</label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"shipping_method\" id=\"transport\" value=\"Transport\">\r\n                                 <label for=\"transport\" class=\"stl\"><span><span></span></span>Transport</label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"shipping_method\" id=\"train\" value=\"Train\">\r\n                                 <label for=\"train\" class=\"stl\"><span><span></span></span>Train</label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"accordion-group panel\">\r\n                  <a href=\"#collapse-4\" data-parent=\"#accordion-order\" data-toggle=\"collapse\" class=\"accordion-header collapsed\">\r\n                     PAYMENT METHOD\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"collapse-4\" style=\"height: 0px;\">\r\n                     <div class=\"accordion-body\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-xs-12\">\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"payment_method\" id=\"transfer\" value=\"transfer\">\r\n                                 <label for=\"transfer\" class=\"stl\"><span><span></span></span>Direct Bank Transfer</label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"payment_method\" id=\"cheque\" value=\"Cheque\">\r\n                                 <label for=\"cheque\" class=\"stl\"><span><span></span></span>Cheque payment</label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                              <div class=\"form-group radio\">\r\n                                 <input type=\"radio\" class=\"stl\" name=\"payment_method\" id=\"PayPal\" value=\"PayPal\">\r\n                                 <label for=\"PayPal\" class=\"stl\"><span><span></span></span>PayPal <img src=\"../../images/paypal_icon.jpg\" alt=\"paypal\"></label>\r\n                                 <p class=\"caption\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam sem, hendrerit ut faubus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. vipsum nectac ligula placerat sollicitudin. Curabitur sit amet magna quam. Praesent in libero vel turpis pellentesque egestas sit amet vel nunc lobortis dui neque, quis accumsan dolor. Aenean aliquet dignissim semper maecenas ullamcorper.</p>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"row big-button\">\r\n                           <div class=\"col-xs-12 clearfix\">\r\n                              <button class=\"btn btn-lg btn-third-col\" type=\"submit\">PLACE ORDER</button>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-xs-12\">\r\n                  <h6 class=\"accordion-h6\">ORDER NOTES</h6>\r\n                  <div class=\"required form-group\">\r\n                     <textarea rows=\"3\" class=\"form-control placeholder-fix\" placeholder=\"Notes about your order\"></textarea>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/compare/compare.component.css":
/*!***********************************************!*\
  !*** ./src/app/compare/compare.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/compare/compare.component.html":
/*!************************************************!*\
  !*** ./src/app/compare/compare.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n    <div class=\"container\">\r\n       <div class=\"row\">\r\n          <div class=\"gap-60\"></div>\r\n          <div class=\"col-xs-12\">\r\n             <div class=\"table_block table-responsive compare-div\" id=\"order-detail-content\">\r\n                <table class=\"table table-bordered compare-table\" id=\"cart_summary\">\r\n                   <tfoot class=\"dd-list-empty\"><tr><td>There is no product in compare list!</td></tr></tfoot>\r\n                   <tbody class=\"dropdown-product-list\">\r\n                      <tr class=\"compare-image cart_item dd-product-group\">\r\n                         <td class=\"row-title\">PRODUCT IMAGE</td>\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <span class=\"img-cover\">\r\n                                  <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                               </span>\r\n                            </a>\r\n                         </td><td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <span class=\"img-cover\">\r\n                                  <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                               </span>\r\n                            </a>\r\n                         </td><td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <span class=\"img-cover\">\r\n                                  <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                               </span>\r\n                            </a>\r\n                         </td><td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <span class=\"img-cover\">\r\n                                  <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                               </span>\r\n                            </a>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"compare-name cart_item dd-product-group\">\r\n                         <td class=\"row-title\">PRODUCT NAME</td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                         </td><td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                         </td><td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                         </td><td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"compare-rating cart_item dd-product-group\">\r\n                         <td class=\"row-title\">PRODUCT RATING</td><td>\r\n                         <span class=\"stars-rating stars-4\"><span class=\"stars\"></span></span></td><td>\r\n                         <span class=\"stars-rating stars-4\"><span class=\"stars\"></span></span></td><td>\r\n                         <span class=\"stars-rating stars-4\"><span class=\"stars\"></span></span></td><td>\r\n                         <span class=\"stars-rating stars-4\"><span class=\"stars\"></span></span></td>\r\n                      </tr>\r\n                      <tr class=\"compare-description cart_item dd-product-group\">\r\n                         <td class=\"row-title\">PRODUCT DESCRIPTION</td><td>\r\n                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et  velit perspiciatis unde omnis iste natus error sit est, qui </p></td><td>\r\n                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et  velit perspiciatis unde omnis iste natus error sit est, qui </p></td><td>\r\n                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et  velit perspiciatis unde omnis iste natus error sit est, qui </p></td><td>\r\n                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et  velit perspiciatis unde omnis iste natus error sit est, qui </p></td>\r\n                      </tr>\r\n                      <tr class=\"compare-brand cart_item dd-product-group\">\r\n                         <td class=\"row-title\">BRAND</td><td>\r\n                         <p>Franco Windbreaker</p></td><td>\r\n                         <p>Franco Windbreaker</p></td><td>\r\n                         <p>Franco Windbreaker</p></td><td>\r\n                         <p>Franco Windbreaker</p></td>\r\n                      </tr>\r\n                      <tr class=\"compare-size cart_item dd-product-group\">\r\n                         <td class=\"row-title\">SIZE</td><td>\r\n                         <p>S, L, XL, M</p></td><td>\r\n                         <p>S, L, XL, M</p></td><td>\r\n                         <p>S, L, XL, M</p></td><td>\r\n                         <p>S, L, XL, M</p></td>\r\n                      </tr>\r\n                      <tr class=\"compare-color cart_item dd-product-group\">\r\n                         <td class=\"row-title\">COLOR</td><td>\r\n                         <p>White, Red, Gray, Orange</p></td><td>\r\n                         <p>White, Red, Gray, Orange</p></td><td>\r\n                         <p>White, Red, Gray, Orange</p></td><td>\r\n                         <p>White, Red, Gray, Orange</p></td>\r\n                      </tr>\r\n                      <tr class=\"compare-availability cart_item dd-product-group\">\r\n                         <td class=\"row-title\">AVAILABILITY</td><td>\r\n                         <p><span></span>In Stock</p></td><td>\r\n                         <p><span></span>In Stock</p></td><td>\r\n                         <p><span></span>In Stock</p></td><td>\r\n                         <p><span></span>In Stock</p></td>\r\n                      </tr>\r\n                      <tr class=\"compare-price cart_item dd-product-group\">\r\n                         <td class=\"row-title\">PRICE</td><td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td><td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td><td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td><td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"compare-quantity cart_item dd-product-group\">\r\n                         <td class=\"row-title\">QUANTITY</td><td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td><td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td><td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td><td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"compare-add-cart cart_item dd-product-group\">\r\n                         <td class=\"row-title\">ADD TO CART</td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"shopping-cart.html\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"shopping-cart.html\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"shopping-cart.html\" title=\"Buy\" class=\"btn btn-sec-col \">ADD TO CART</a><br>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"shopping-cart.html\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"compare-control cart_item dd-product-group\">\r\n                         <td class=\"row-title\">&nbsp;</td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"wishlist.html\" title=\"Add to Wishlist\" rel=\"nofollow\" class=\"add-wishlist remove\"><span class=\"icon-heart\"></span>Add to Wishlist</a>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"wishlist.html\" title=\"Add to Wishlist\" rel=\"nofollow\" class=\"add-wishlist remove\"><span class=\"icon-heart\"></span>Add to Wishlist</a>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"wishlist.html\" title=\"Add to Wishlist\" rel=\"nofollow\" class=\"add-wishlist remove\"><span class=\"icon-heart\"></span>Add to Wishlist</a>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td><td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"wishlist.html\" title=\"Add to Wishlist\" rel=\"nofollow\" class=\"add-wishlist remove\"><span class=\"icon-heart\"></span>Add to Wishlist</a>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                   </tbody>\r\n                </table>\r\n             </div>\r\n          </div>   \r\n       </div>\r\n    </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/compare/compare.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compare/compare.component.ts ***!
  \**********************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompareComponent = /** @class */ (function () {
    function CompareComponent() {
    }
    CompareComponent.prototype.ngOnInit = function () {
    };
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.css */ "./src/app/compare/compare.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/constants/products.ts":
/*!***************************************!*\
  !*** ./src/app/constants/products.ts ***!
  \***************************************/
/*! exports provided: ProductConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConstants", function() { return ProductConstants; });
var ProductConstants = /** @class */ (function () {
    function ProductConstants() {
    }
    ProductConstants.ERROR_OCCURRED = 'An error occurred';
    ProductConstants.ERROR_FETCHING_TOTAL_PRODUCTS = 'Error fetching the total products';
    ProductConstants.ERROR_FETCHING_PRODUCTS = 'Error fetching products';
    ProductConstants.ERROR_FETCHING_REVIEW = 'Error fetching reviews';
    ProductConstants.DESCRIPTION_TAB = 'description';
    ProductConstants.REVIEW_TAB = 'review';
    ProductConstants.TWEET_MSG = 'You might want to check this cool product:';
    ProductConstants.DEFAULT_TWEET_MSG = 'Do visit this website : ';
    ProductConstants.SUCCESS_MSG = 'Success!';
    ProductConstants.REVIEW_ERROR = 'Error occurred while submitting a review';
    ProductConstants.REVIEW_SUCCESS = 'Your review has been successfully submitted';
    return ProductConstants;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n  <div class=\"container contact\">\r\n     <div class=\"row\">\r\n        <div class=\"col-md-9 col-sm-12\">\r\n           <form (ngSubmit)=\"leaveReply(personModel)\"\r\n           #personDetailsForm=\"ngForm\"\r\n            class=\"validation-engine\">\r\n              <div class=\"google-maps\">\r\n                 <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89553.25418528763!2d9.19406272678945!3d45.458941223623455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan!5e0!3m2!1sen!2s!4v1403031740860\" width=\"370\" height=\"150\"></iframe>\r\n              </div>\r\n              <h6>LEAVE A REPLY</h6>\r\n              <div class=\"row\">\r\n                 <div class=\"col-sm-6 col-xs-12\">\r\n                    <div class=\"required form-group\">\r\n                       <input type=\"text\"\r\n                        [(ngModel)]=\"personModel.name\"\r\n                        name=\"name\"\r\n                        #name=\"ngModel\"\r\n                        required\r\n                        class=\"form-control validate[required]\" \r\n                        data-prompt-position=\"topLeft\" \r\n                        placeholder=\"Name *\">\r\n                        <div [hidden]=\"name.valid || name.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                          Name is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"required form-group\">\r\n                       <input type=\"email\" \r\n                       [(ngModel)]=\"personModel.email\"\r\n                       name=\"email\"\r\n                       required\r\n                       #email=\"ngModel\"\r\n                       class=\"form-control validate[required,custom[email]]\" \r\n                       data-prompt-position=\"topLeft\"\r\n                       placeholder=\"E-mail *\">\r\n                       <div [hidden]=\"email.valid || email.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                          Email is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"required form-group\">\r\n                       <input type=\"text\" \r\n                       [(ngModel)]=\"personModel.subject\"\r\n                       name=\"subject\"\r\n                       required\r\n                       #subject=\"ngModel\"\r\n                       class=\"form-control validate[required]\" \r\n                       data-prompt-position=\"topLeft\" \r\n                       placeholder=\"Enter your subject *\">\r\n                       <div [hidden]=\"subject.valid || subject.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                          Subject is required\r\n                        </div>\r\n                    </div>\r\n                    <p>Your email adress will not published. Required fields are marked *</p>\r\n                 </div>\r\n                 <div class=\"col-sm-6 col-xs-12\">\r\n                    <div class=\"required form-group\">\r\n                       <textarea class=\"form-control validate[required]\" \r\n                       [(ngModel)]=\"personModel.reply\"\r\n                       data-prompt-position=\"topLeft\" \r\n                       name=\"reply\"\r\n                       rows=\"6\"\r\n                       placeholder=\"Your reply\"></textarea>\r\n                    </div>\r\n                    <div class=\"required form-group\">\r\n                       <button class=\"btn btn-sm btn-third-col col-xs-12\" \r\n                       type=\"submit\"\r\n                       ng-submit=\"leaveReply()\"\r\n                       [disabled]=\"!personDetailsForm.form.valid\"\r\n                       >LEAVE REPLY</button>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </form>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-3\">\r\n           <h6>CONTACT PERSON</h6>\r\n           <div class=\"person\">\r\n              <div class=\"img-cover\"><img src=\"images/av_3.jpg\" alt=\"#\"></div>\r\n              <div class=\"name\">John Doe<span> – Director</span></div>\r\n              <div class=\"smart-phone\"><i class=\"icon-screen-smartphone\"></i><span>+1(800)2364 322 23 16</span></div>\r\n              <div class=\"email\"><i class=\"icon-envelope-open\"></i><a href=\"mailto:milan@gmail.com\">milan@gmail.com</a></div>\r\n           </div>\r\n           <div class=\"person\">\r\n              <div class=\"img-cover\"><img src=\"images/av_2.jpg\" alt=\"#\"></div>\r\n              <div class=\"name\">Michael Doe<span> – Manager</span></div>\r\n              <div class=\"smart-phone\"><i class=\"icon-screen-smartphone\"></i><span>+1(800)2364 322 23 16</span></div>\r\n              <div class=\"email\"><i class=\"icon-envelope-open\"></i><a href=\"mailto:milan@gmail.com\">milan@gmail.com</a></div>\r\n           </div>\r\n           <div class=\"person\">\r\n              <div class=\"img-cover\"><img src=\"images/av_1.jpg\" alt=\"#\"></div>\r\n              <div class=\"name\">Justin  Doe<span> – Assistant Manager</span></div>\r\n              <div class=\"smart-phone\"><i class=\"icon-screen-smartphone\"></i><span>+1(800)2364 322 23 16</span></div>\r\n              <div class=\"email\"><i class=\"icon-envelope-open\"></i><a href=\"mailto:milan@gmail.com\">milan@gmail.com</a></div>\r\n           </div>\r\n           <div class=\"detail\">\r\n              <h6>CONTACT</h6>\r\n              <div class=\"phone\"><i class=\"icon-call-end\"></i><span>+1(800)2364 322 23 16</span></div>\r\n              <div class=\"smart-phone\"><i class=\"icon-screen-smartphone\"></i><span>+1(800)2364 322 23 16</span></div>\r\n              <div class=\"email\"><i class=\"icon-envelope-open\"></i><a href=\"mailto:milan@gmail.com\">milan@gmail.com</a></div>\r\n              <div class=\"skype\"><i class=\"social_skype\"></i><span>Milan_best_template</span></div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-person.service */ "./src/app/contact-person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(contactPersonService) {
        this.contactPersonService = contactPersonService;
        this.personModel = {};
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        this.contactPersonService.fetchAllContactPersons().subscribe(function (data) {
            // this.contactPersons = data;
        }, function (err) { return console.log(err); });
    };
    ContactPageComponent.prototype.leaveReply = function (personDetails) {
        console.log(personDetails);
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_person_service__WEBPACK_IMPORTED_MODULE_1__["ContactPersonService"]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/contact-person.service.ts":
/*!*******************************************!*\
  !*** ./src/app/contact-person.service.ts ***!
  \*******************************************/
/*! exports provided: ContactPersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersonService", function() { return ContactPersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPersonService = /** @class */ (function () {
    function ContactPersonService(http) {
        this.http = http;
        this.contactUrl = '';
    }
    ContactPersonService.prototype.fetchAllContactPersons = function () {
        return this.http.get(this.contactUrl);
    };
    ContactPersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactPersonService);
    return ContactPersonService;
}());



/***/ }),

/***/ "./src/app/countries.service.ts":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountriesService = /** @class */ (function () {
    function CountriesService(http) {
        this.http = http;
        this.url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json";
    }
    CountriesService.prototype.allCountries = function () {
        return this.http.get(this.url);
    };
    CountriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <footer>\r\n\r\n      <!-- page body content end -->\r\n      <!-- footer-1 begin -->\r\n      <div id=\"footer-1\">\r\n         \r\n            <div class=\"container\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"most-popular-box box-with-pager mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           Most Popular\r\n                        </div>\r\n                        <div class=\"mobile-collapse-body\">\r\n                           <ul class=\"vertical-bx-1\">\r\n                              <li>\r\n                                 <a href=\"#\">      \r\n                                    <figure>\r\n                                       <span class=\"img-cover\"><img src=\"../assets/images/pr_1-small.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                       <figcaption>\r\n                                          Black Bag\r\n                                          <span class=\"price\">990.00</span>\r\n                                       </figcaption>\r\n                                    </figure>\r\n                                 </a>\r\n                              </li>\r\n                              <li>\r\n                                 <a href=\"#\">      \r\n                                    <figure>\r\n                                       <span class=\"img-cover\"><img src=\"../assets/images/pr_4-small.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                       <figcaption>\r\n                                          Woman Red Handy Bag\r\n                                          <span class=\"price\">990.00</span>\r\n                                       </figcaption>\r\n                                    </figure>\r\n                                 </a>\r\n                                 <a href=\"#\">      \r\n                                    <figure>\r\n                                       <span class=\"img-cover\"><img src=\"../assets/images/pr_5-small.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                       <figcaption>\r\n                                          Man Black Leather Wallet\r\n                                          <span class=\"price\">$30.00</span>\r\n                                       </figcaption>\r\n                                    </figure>\r\n                                 </a>\r\n                              </li>\r\n                           </ul>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"twitter-box box-with-top-button mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           Twitter\r\n                        </div>\r\n                        \r\n                        <ul class=\"tweets-group list-unstyled mobile-collapse-body\">\r\n                           <li>\r\n                              <p>Lorem ipsum dolor consectetur adipisicing exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa </p>\r\n                              <span>17 June 2016</span>\r\n                           </li>\r\n                           <li>\r\n                              <p>Lorem ipsum dolor consectetur adipisicing exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa </p>\r\n                              <span>10 June 2016</span>\r\n                           </li>\r\n                           <li>\r\n                              <p>Lorem ipsum dolor consectetur adipisicing exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa </p>\r\n                              <span>01 June 2016</span>\r\n                           </li>\r\n                        </ul>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"get-in-touch-box mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           Get IN TOUCH WITH US\r\n                        </div>\r\n                        <div class=\"tweets-group mobile-collapse-body\">\r\n                              <form (ngSubmit)=\"leaveReply(personModel)\"\r\n                              #personDetailsForm=\"ngForm\"\r\n                               class=\"validation-engine\">\r\n                              <div class=\"google-maps\">\r\n                                 <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89553.25418528763!2d9.19406272678945!3d45.458941223623455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sShop+!5e0!3m2!1sen!2s!4v1403031740860\" width=\"370\" height=\"150\"></iframe>\r\n                              </div>\r\n                              <div class=\"required form-group\">\r\n                                    <input type=\"text\"\r\n                                     [(ngModel)]=\"personModel.name\"\r\n                                     name=\"name\"\r\n                                     #name=\"ngModel\"\r\n                                     required\r\n                                     class=\"form-control validate[required]\" \r\n                                     data-prompt-position=\"topLeft\" \r\n                                     placeholder=\"Name *\">\r\n                                     <div [hidden]=\"name.valid || name.pristine\"\r\n                                         class=\"alert alert-danger\">\r\n                                       Name is required\r\n                                     </div>\r\n                              </div>\r\n                              <div class=\"required form-group\">\r\n                                    <input type=\"email\" \r\n                                    [(ngModel)]=\"personModel.email\"\r\n                                    name=\"email\"\r\n                                    required\r\n                                    #email=\"ngModel\"\r\n                                    class=\"form-control validate[required,custom[email]]\" \r\n                                    data-prompt-position=\"topLeft\"\r\n                                    placeholder=\"E-mail *\">\r\n                                    <div [hidden]=\"email.valid || email.pristine\"\r\n                                         class=\"alert alert-danger\">\r\n                                       Email is required\r\n                                     </div>\r\n                              </div>\r\n                              <div class=\"required form-group\">\r\n                                    <textarea class=\"form-control validate[required]\" \r\n                                    [(ngModel)]=\"personModel.reply\"\r\n                                    data-prompt-position=\"topLeft\" \r\n                                    name=\"reply\"\r\n                                    rows=\"6\"\r\n                                    placeholder=\"Your reply\"></textarea>\r\n                              </div>\r\n                              <div class=\"required form-group\">\r\n                                    <button class=\"btn btn-sm btn-third-col col-xs-12\" \r\n                                    type=\"submit\"\r\n                                    ng-submit=\"leaveReply()\"\r\n                                    [disabled]=\"!personDetailsForm.form.valid\"\r\n                                    >Send Message</button>\r\n                              </div>\r\n                           </form>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n      </div>\r\n      <!-- footer-1 end -->\r\n      <!-- footer-2 begin -->\r\n      <div id=\"footer-2\">\r\n         \r\n            <div class=\"container\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"about-us-box mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           About Us\r\n                        </div>\r\n                        <div class=\"mobile-collapse-body\">\r\n                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem \r\n                           </p>\r\n                           <p>\r\n                              voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\r\n                           </p>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"contact-info-box mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           Contact Info\r\n                        </div>\r\n                        <ul class=\"list-unstyled mobile-collapse-body\">\r\n                           <li><span><i class=\"icon-pointer\"></i></span><span>Shop+, Valencia Road, Dumaguete city, Italy.</span></li>\r\n                           <li><span><i class=\"icon-screen-smartphone\"></i></span><span> +1800-555-6875</span></li>\r\n                           <li><a href=\"mailto:your@email.com\"><span><i class=\"icon-envelope \"></i></span><span>your@email.com</span></a></li>\r\n                           <li><a href=\"http://envato.com\"><span><i class=\"icon-globe\"></i></span><span>www.envato.com</span></a></li>\r\n                        </ul>\r\n                     </div>   \r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                     <div class=\"facebox-fan-box box-with-top-button mobile-collapse\">\r\n                        <div class=\"title-type-1 mobile-collapse-header\">\r\n                           Facebook Fans\r\n                        </div>\r\n                     \r\n                        <div id=\"fb-fans\" class=\"mobile-collapse-body\">\r\n                           <iframe src=\"https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FAmcart-368639920621352&amp;width=360&amp;height=258&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false&amp\"></iframe>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n      </div>\r\n      <!-- footer-2 end -->\r\n      <!-- footer-3 begin -->\r\n      <div id=\"footer-3\">\r\n         \r\n            <div class=\"container\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-3 col-sm-12\">\r\n                     <div class=\"information-box mobile-collapse\">\r\n                        <div class=\"title-type-2 mobile-collapse-header\">\r\n                           Information\r\n                        </div>\r\n                        <ul class=\"list-unstyled mobile-collapse-body\">\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Bestsellers\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 New product\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Special product\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Featured product\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a [routerLink]=\"['/contact']\">\r\n                                 Contact\r\n                              </a>\r\n                           </li>\r\n                        </ul>      \r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-sm-12\">\r\n                     <div class=\"product-tags-box mobile-collapse\">\r\n                        <div class=\"title-type-2 mobile-collapse-header\">\r\n                           Product Tags\r\n                        </div>\r\n                        <div class=\"tags mobile-collapse-body\">\r\n                           <a href=\"#\">Men</a>\r\n                           <a href=\"#\">Furniture</a>\r\n                           <a href=\"#\">Electronic</a>\r\n                           <a href=\"#\">Fabric</a>\r\n                           <a href=\"#\">Jackets</a>\r\n                           <a href=\"#\">Clothes</a>\r\n                           <a href=\"#\">Flowers</a>\r\n                           <a href=\"#\">Book</a>\r\n                           <a href=\"#\">Shorts</a>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-sm-12\">\r\n                     <div class=\"my-account-box mobile-collapse\">\r\n                        <div class=\"title-type-2 mobile-collapse-header\">\r\n                           My Account\r\n                        </div>\r\n                        <ul class=\"list-unstyled mobile-collapse-body\">\r\n                           <li>\r\n                              <a [routerLink]=\"['/profile']\">\r\n                                 My Account\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a [routerLink]=\"['/profile/wishlist']\">\r\n                                 Wishlist\r\n                              </a>\r\n                           </li>\r\n                          \r\n                        </ul>      \r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-3 col-sm-12\">\r\n                     <div class=\"main-categories-box mobile-collapse\">\r\n                        <div class=\"title-type-2 mobile-collapse-header\">\r\n                           Main Categories\r\n                        </div>\r\n                        <ul class=\"list-unstyled mobile-collapse-body\">\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 For Men\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Jeans\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Jackets\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 For Her\r\n                              </a>\r\n                           </li>\r\n                           <li>\r\n                              <a href=\"#\">\r\n                                 Accessories\r\n                              </a>\r\n                           </li>\r\n                        </ul>      \r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n      </div>\r\n      <!-- footer-3 end -->\r\n      <!-- footer-4 begin -->\r\n      <div id=\"footer-4\">\r\n         \r\n            <div class=\"container\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-6 text-center-md\">\r\n                     <img src=\"../assets/images/credit-cards.png\" alt=\"accepted credit cards\">\r\n                  </div>\r\n                  <div class=\"col-md-6 text-right text-center-md\">\r\n                     <ul id=\"social-buttons\" class=\"list-inline\">\r\n                           <li>\r\n                              <fb-like url=\"https://www.facebook.com/Amcart-368639920621352\"></fb-like>\r\n                           </li>\r\n                           <li class=\"tweet-social-tag\">\r\n                              <tweet text=\"{{tweetMsg}}\"></tweet></li>\r\n                           <li>\r\n                              <google-plus class=\"gplus\"></google-plus></li>\r\n                           <li>\r\n                              <linkedin-share></linkedin-share></li>\r\n                     </ul>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         \r\n      </div>   \r\n      <!-- footer-4 end -->\r\n      <!-- footer-5 begin -->\r\n      <div id=\"footer-5\">\r\n         \r\n            <div class=\"container\">\r\n               <p class=\"copyright\">\r\n                  © 2016 Shop+. All right reseved. Made with <i class=\"icon_heart\"></i> by <a href=\"http://envato.com\">Envato</a>\r\n               </p>\r\n            </div>\r\n         \r\n      </div>\r\n      <!-- footer-5 end -->   \r\n\r\n   </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/products */ "./src/app/constants/products.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.personModel = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.tweetMsg = _constants_products__WEBPACK_IMPORTED_MODULE_1__["ProductConstants"].DEFAULT_TWEET_MSG;
    };
    FooterComponent.prototype.leaveReply = function (personDetails) {
        console.log(personDetails);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <header>\r\n\r\n      <!-- top bar begin -->\r\n      <div id=\"top-bar\">\r\n         <div class=\"container\">\r\n            <div class=\"pull-left left-top-bar\">\r\n               <div id=\"lang\">\r\n                  <ul class=\"list-inline hidden-xs\">\r\n                     <li>\r\n                        <a href=\"#\" class=\"active\">English</a>\r\n                     </li>\r\n                     <li>\r\n                        <a href=\"#\">French</a>\r\n                     </li>\r\n                     <li>\r\n                        <span></span>\r\n                     </li>\r\n                  </ul>\r\n                  <div class=\"dropdown dropdown-top-list visible-xs\">\r\n                     <a  href=\"#\" data-toggle=\"dropdown\" title=\"\">\r\n                        English <span class=\"caret\"></span>\r\n                     </a>\r\n                     <div class=\"dropdown-menu dropdown-top-menu\">\r\n                        <span class=\"dropdown-triangle-up\"></span>\r\n                        <ul class=\"dropdown-top-menu-list\">\r\n                           <li><a href=\"#\">French</a></li>\r\n                           <li><a href=\"#\">German</a></li>\r\n                        </ul>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div id=\"currencies\">\r\n                  <ul class=\"list-inline hidden-xs\">\r\n                     <li>\r\n                        <a href=\"#\" class=\"active\">USD</a>\r\n                     </li>\r\n                     <li>\r\n                        <a href=\"#\">EUR</a>\r\n                     </li>\r\n                  </ul>\r\n                  <div class=\"dropdown dropdown-top-list visible-xs\">\r\n                     <a  href=\"#\" data-toggle=\"dropdown\" title=\"\">\r\n                        USD <span class=\"caret\"></span>\r\n                     </a>\r\n                     <div class=\"dropdown-menu dropdown-top-menu\">\r\n                        <span class=\"dropdown-triangle-up\"></span>\r\n                        <ul class=\"dropdown-top-menu-list\">\r\n                           <li><a href=\"#\">EUR</a></li>\r\n                           <li><a href=\"#\">AUD</a></li>\r\n                        </ul>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div id=\"top-contacts\">\r\n                  <ul class=\"list-inline\">\r\n                     <li class=\"hidden-xs\">\r\n                        <i class=\"icon-call-in\"></i>\r\n                        <span>+ 1 (800) 2364 332 23 16</span>\r\n                     </li>\r\n                     <li class=\"hidden-xs\">\r\n                        <a href=\"your@email.com\">\r\n                           <i class=\"icon-envelope\"></i>\r\n                           <span class=\"hidden-xs\">your@email.com</span>\r\n                        </a>\r\n                     </li>\r\n                  </ul>\r\n               </div>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n               <div id=\"user-top-bar dropdown\">\r\n                  <div class=\"btn btn-default dropdown-toggle\"\r\n                     id=\"userDropdownMenu\"\r\n                     data-toggle=\"dropdown\"\r\n                     aria-expanded=\"false\"\r\n                     [routerLink]=\"['/profile']\"\r\n                     (click)=\"getUserDetails()\"\r\n                     title=\"profile\">\r\n                     User\r\n                  </div>\r\n                  <div class=\"btn btn-default dropdown-toggle\"\r\n                     id=\"checkoutDropdownMenu\"\r\n                     data-toggle=\"dropdown\"\r\n                     aria-expanded=\"false\"\r\n                     [routerLink]=\"['/checkout']\"\r\n                     title=\"checkout\">\r\n                     Checkout\r\n                  </div>\r\n                  <div class=\"btn btn-default dropdown-toggle\"\r\n                     id=\"compareDropdownMenu\"\r\n                     data-toggle=\"dropdown\"\r\n                     aria-expanded=\"false\"\r\n                     [routerLink]=\"['/compare']\"\r\n                     title=\"compare\">\r\n                     Compare\r\n                  </div>\r\n                  <span class=\"dropdown-triangle-up\"></span>\r\n                  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <li class=\"dropdown-item\">\r\n                           <a [routerLink]=\"['/profile/wishlist']\">\r\n                              Wishlist\r\n                           </a>\r\n                        </li>\r\n                        <li class=\"dropdown-item\">\r\n                           <!---To do : Add cart link-->\r\n                           <a href=\"#\">\r\n                              Cart\r\n                           </a>\r\n                        </li>\r\n                        <li class=\"dropdown-item\">\r\n                           <a [routerLink]=\"['/profile']\">\r\n                              Profile\r\n                           </a>\r\n                        </li>\r\n                     </ul>\r\n\r\n               </div>\r\n            </div>\r\n\r\n         </div>\r\n      </div>\r\n      <!-- top bar end -->\r\n      <!-- header bar begin -->\r\n      <div id=\"header-bar\">\r\n         <div class=\"container\">\r\n            <div class=\"row\">\r\n               <div class=\"col-md-3 top-search-box hidden-sm hidden-xs\">\r\n                  <form action=\"/\" method=\"post\">\r\n                     <div class=\"required form-group\">\r\n                        <input type=\"text\" name=\"search_query\" placeholder=\"Search\" class=\"placeholder-fix top-search\" autocomplete=\"off\">\r\n                        <button><i class=\"icon_search\"></i></button>\r\n                     </div>\r\n                  </form>\r\n               </div>\r\n               <div id=\"header-logo\" class=\"col-md-6 col-sm-12\">\r\n                  <a href=\"#\">\r\n                     <img src=\"../assets/images/logo.svg\" class=\"logo center-block hidden-xs\" alt=\"Shop+ - Responsive HTML5 Multipurpose Ecommerce Template\">\r\n                     <img src=\"../assets/images/logo.svg\" class=\"logo center-block visible-xs hidden-sm\" alt=\"Shop+ - Responsive HTML5 Multipurpose Ecommerce Template\">\r\n                  </a>\r\n               </div>\r\n               <div class=\"col-md-3 hidden-sm hidden-xs\">\r\n                  <div id=\"shopping-cart-wrapper\" class=\"dropdown\">\r\n                     <a href=\"#\" class=\"shp-ca\" data-toggle=\"dropdown\">\r\n                        <div class=\"s-bag-1\">\r\n                           <i class=\"icon-bag\"></i>\r\n                        </div>\r\n                        <div class=\"s-cart-pan\">\r\n                           <div class=\"s-bag-2\">\r\n                              <span class=\"dd-products-count\">2</span> item(s) / <span class=\"active dd-products-price\">$230.00</span>\r\n                           </div>\r\n                        </div>\r\n                     </a>\r\n                     <div class=\"dropdown-menu dropdown-menu-right larger text-left\" role=\"menu\">\r\n                        <span class=\"dropdown-triangle-up\"></span>\r\n                        <a href=\"#\" class=\"dd-close-btn\"><i class=\"icon_close\"></i></a>\r\n                        <div class=\"dropdown-head\">\r\n                           <h4 class=\"pull-left\">2 items in the shopping bag</h4>\r\n                        </div>\r\n                        <div class=\"dd-wrapper\">\r\n                           <div class=\"dd-list-empty\">There is no product in shopping cart!</div>\r\n                           <div id=\"cart-product-group\" class=\"dropdown-product-list\">\r\n                              <div class=\"dd-product-group\" id=\"pr5\">\r\n                                 <div class=\"dd-product-box pull-left\">\r\n                                    <a href=\"#\" title=\"product name\">\r\n                                       <img src=\"assets/images/pr_2-small.jpg\" alt=\"product name\">\r\n                                    </a>\r\n                                 </div>\r\n                                 <div class=\"dd-product-desc pull-left\">\r\n                                    <a class=\"title\">Beautiful Fit Velvet Sweater For Him test for longer header test for longer header</a>\r\n                                    <div class=\"qty\">1 x <span class=\"active\">$700.00</span></div>\r\n                                    <a href=\"#\" class=\"close-btn ddr\"><i class=\"icon_close\"></i></a>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"dd-product-group\" id=\"pr6\">\r\n                                 <div class=\"dd-product-box pull-left\">\r\n                                    <a href=\"#\" title=\"product name\">\r\n                                       <img src=\"assets/images/pr_3-small.jpg\" alt=\"product name\">\r\n                                    </a>\r\n                                 </div>\r\n                                 <div class=\"dd-product-desc pull-left\">\r\n                                    <a class=\"title\">Beautiful Fit Velvet Sweater For Here</a>\r\n                                    <div class=\"qty\">1 x <span class=\"active\">$800.00</span></div>\r\n                                    <a href=\"#\" class=\"close-btn ddr\"><i class=\"icon_close\"></i></a>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"text-center clear-all-btn\">\r\n                                 <span class=\"cart-block-subtotal\">\r\n                                    Cart Subtotal: $1500.00\r\n                                 </span>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"row no-gutter\">\r\n                              <div class=\"col-xs-6\">\r\n                                 <a [routerLink]=\"['/shopping-cart']\" class=\"btn btn-md btn-third-col btn-w100\">View Cart</a>\r\n                              </div>\r\n                              <div class=\"col-xs-6\">\r\n                                 <a [routerLink]=\"['/checkout']\" class=\"btn btn-md btn-third-col btn-w100\" >Procced to Checkout</a>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <!-- header bar end -->\r\n      <!-- main menu begin -->\r\n      <div class=\"top-menu\">\r\n         <div class=\"container\">\r\n            <nav class=\"main-menu\">\r\n               <ul class=\"nav-menu\">\r\n                  <li class=\"nav-item\">\r\n                     <a href=\"#\"><i class=\"icon-screen-desktop\"></i> Home</a>\r\n                     <div class=\"sub-nav\">\r\n                          <ul class=\"sub-nav-group\">\r\n                              <li class=\"has-sub-nav\">\r\n                                 <a href=\"#\"><span>Clothes version</span></a>\r\n                                 <div class=\"sub-nav\">\r\n                                    <ul class=\"sub-nav-group\">\r\n                                       <li><a href=\"#\"><span>Boxed Versihon</span></a></li>\r\n                                       <li><a href=\"#\"><span>Full version</span></a></li>\r\n                                   </ul>\r\n                                 </div>\r\n                              </li>\r\n                              <li><a href=\"#\"><span>Furniture version</span></a></li>\r\n                              <li><a href=\"#\"><span>Bookstore version</span></a></li>\r\n                              <li><a href=\"#\"><span>Electronics version</span></a></li>\r\n\t\t\t\t\t\t\t  <li><a href=\"#\"><span>Flower version</span></a></li>\r\n                          </ul>\r\n                      </div>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                     <a href=\"#\"><span><i class=\"icon-user\"></i>Pages</span></a>\r\n                     <div class=\"sub-nav full padding\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-md-3\">\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Basic Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Blog Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Category Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Account Page</span></a></li>\r\n                                 <li><a href=\"@\"><span>Coming Soon Page</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Contact Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Email Template Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Login Register Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Order Complete Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Order History</span></a></li>\r\n\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Shopping Cart Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shortcodes Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Single Blog Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Wishlist Page</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Product Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Review Page</span></a></li>\r\n\t\t\t\t\t\t\t\t <li><a href=\"#\"><span>Checkout Page</span></a></li>\r\n                                 <li><a href=\"#\"><span>Compare Page</span></a></li>\r\n\t\t\t\t\t\t\t\t <li><a href=\"#\"><span>404 Page</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                     <a href=\"#\"><span><i class=\"icon-user-female\"></i> Women</span></a>\r\n                     <div class=\"sub-nav full padding\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-md-3\">\r\n                              <h3 class=\"sub-nav-title\">Jackets</h3>\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Shirts</span></a></li>\r\n                                 <li><a href=\"#\"><span>Jumper & Cardigans</span></a></li>\r\n                                 <li><a href=\"#\"><span>Autumn Jackets</span></a></li>\r\n                                 <li><a href=\"#\"><span>Winter Jackets</span></a></li>\r\n                                 <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                                 <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <h3 class=\"sub-nav-title\">ACCESSORIES</h3>\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Bags</span></a></li>\r\n                                 <li><a href=\"#\"><span>Beauty</span></a></li>\r\n                                 <li><a href=\"#\"><span>Underwear</span></a></li>\r\n                                 <li><a href=\"#\"><span>Glasses</span></a></li>\r\n                                 <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                                 <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <h3 class=\"sub-nav-title\">SHOES</h3>\r\n                              <ul class=\"sub-nav-group sub-nav-grey\">\r\n                                 <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shorts</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shirts</span></a></li>\r\n                                 <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                                 <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                                 <li><a href=\"#\"><span>Suits & Blazers</span></a></li>\r\n                                 <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                              </ul>\r\n                           </div>\r\n                           <div class=\"col-md-3\">\r\n                              <div class=\"megamenu-popular box-with-pager\">\r\n                                 <div class=\"sub-nav-title\">\r\n                                    Popular products\r\n                                 </div>\r\n                                 <div>\r\n                                    <ul class=\"vertical-bx-1\">\r\n                                       <li>\r\n                                          <a href=\"#\">\r\n                                             <figure>\r\n                                                <span class=\"img-cover\"><img src=\"assets/images/pr_1-menu.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                                <figcaption>\r\n                                                   <p>Black Bag</p>\r\n                                                   <span class=\"price\">$950.00</span>\r\n                                                   <span class=\"old-price\">$990.00</span>\r\n                                                </figcaption>\r\n                                             </figure>\r\n                                          </a>\r\n                                       </li>\r\n                                       <li>\r\n                                          <a href=\"#\">\r\n                                             <figure>\r\n                                                <span class=\"img-cover\"><img src=\"assets/images/pr_2-menu.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                                <figcaption>\r\n                                                   <p>Woman Red Handy Bag</p>\r\n                                                   <span class=\"price\">$950.00</span>\r\n                                                   <span class=\"old-price\">$990.00</span>\r\n                                                </figcaption>\r\n                                             </figure>\r\n                                          </a>\r\n                                       </li>\r\n                                    </ul>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                     <a href=\"#\"><span><i class=\"icon-screen-desktop\"></i> Electronics</span></a>\r\n                     <div class=\"sub-nav\">\r\n                          <ul class=\"sub-nav-group\">\r\n                              <li><a href=\"#\"><span>Account</span></a></li>\r\n                              <li><a href=\"#\"><span>New Product</span></a></li>\r\n                              <li><a href=\"#\"><span>Special Product</span></a></li>\r\n                              <li><a href=\"#\"><span>Featured Product</span></a></li>\r\n                              <li><a [routerLink]=\"['/contact']\"><span>Contact</span></a></li>\r\n                              <li><a href=\"shortcodes.html\"><span>Shortcodes</span></a></li>\r\n                              <li class=\"has-sub-nav\">\r\n                                 <a href=\"#\"><span>Submenu Left</span></a>\r\n                                 <div class=\"sub-nav left-side\">\r\n                                    <ul class=\"sub-nav-group\">\r\n                                       <li><a href=\"#\"><span>Account</span></a></li>\r\n                                       <li><a href=\"#\"><span>New Product</span></a></li>\r\n                                       <li><a href=\"#\"><span>Special Product</span></a></li>\r\n                                       <li><a href=\"#\"><span>Featured Product</span></a></li>\r\n                                       <li><a [routerLink]=\"['/contact']\"><span>Contact</span></a></li>\r\n                                       <li><a href=\"shortcodes.html\"><span>Shortcodes</span></a></li>\r\n                                   </ul>\r\n                                 </div>\r\n                              </li>\r\n                          </ul>\r\n                      </div>\r\n                  </li>\r\n   \r\n                  <li class=\"nav-item\">\r\n                     <a ><span><i class=\"icon-cup\"></i> Popular</span></a>\r\n                     <div class=\"sub-nav full padding\">\r\n                        <div class=\"megamenu-popular mmp-type-2 box-with-pager\">\r\n                           <ul class=\"vertical-bx-1\">\r\n                              <li>\r\n                                 <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                       <a href=\"#\">\r\n                                          <figure>\r\n                                             <span class=\"img-cover\"><img src=\"assets/images/pr_1.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                             <figcaption>\r\n                                                <p>Woman Red Handy Bag</p>\r\n                                                <span class=\"price\">$950.00</span>\r\n                                                <span class=\"old-price\">$990.00</span>\r\n                                             </figcaption>\r\n                                          </figure>\r\n                                       </a>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                       <a href=\"#\">\r\n                                          <figure>\r\n                                             <span class=\"img-cover\"><img src=\"assets/images/pr_2.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                             <figcaption>\r\n                                                <p>Woman Red Handy Bag</p>\r\n                                                <span class=\"price\">$950.00</span>\r\n                                                <span class=\"old-price\">$990.00</span>\r\n                                             </figcaption>\r\n                                          </figure>\r\n                                       </a>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                       <a href=\"#\">\r\n                                          <figure>\r\n                                             <span class=\"img-cover\"><img src=\"assets/images/pr_3.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                             <figcaption>\r\n                                                <p>Woman Red Handy Bag</p>\r\n                                                <span class=\"price\">$950.00</span>\r\n                                                <span class=\"old-price\">$990.00</span>\r\n                                             </figcaption>\r\n                                          </figure>\r\n                                       </a>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                       <a href=\"#\">\r\n                                          <figure>\r\n                                             <span class=\"img-cover\"><img src=\"assets/images/pr_4.jpg\" alt=\"image name\" class=\"pic\"></span>\r\n                                             <figcaption>\r\n                                                <p>Woman Red Handy Bag</p>\r\n                                                <span class=\"price\">$950.00</span>\r\n                                                <span class=\"old-price\">$990.00</span>\r\n                                             </figcaption>\r\n                                          </figure>\r\n                                       </a>\r\n                                    </div>\r\n                                 </div>\r\n                              </li>\r\n                           </ul>\r\n                        </div>\r\n                        \r\n                     </div>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                     <a [routerLink]=\"['/contact']\"><span><i class=\"icon-call-in\"></i> Contact Us</span></a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                     <a href=\"#\"><span><i class=\"icon-wallet\"></i> Sale</span></a>\r\n                  </li>\r\n               </ul>\r\n            </nav>\r\n         </div>\r\n      </div>\r\n      <!-- main menu end -->\r\n      <!-- mobile menu begin -->\r\n      <div class=\"mobile-menu\">\r\n         <nav>\r\n            <div class=\"mobile-menu-button\">\r\n               MENU\r\n               <a href=\"#\" class=\"mobile-menu-toggler\"><span></span><span></span><span></span></a>\r\n            </div>\r\n            <div class=\"mobile-menu-body\">\r\n               <div class=\"mobile-menu-search clearfix\">\r\n                  <form action=\"/\">\r\n                     <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                     </div>\r\n                     <button type=\"submit\" class=\"btn btn-default\"><i class=\"icon-magnifier\"></i></button>\r\n                  </form>\r\n               </div>\r\n               <ul>\r\n                  <li><a href=\"#\"><i class=\"icon-home\"></i> Home</a></li>\r\n                  <li>\r\n                     <a href=\"#\"><i class=\"icon-user\"></i> Men</a>\r\n                     <a class=\"submenu-toggler\" href=\"#\"><i class=\"arrow_carrot-down\"></i></a>\r\n                     <ul>\r\n                        <li><a href=\"#\"><span>Shirts</span></a></li>\r\n                        <li><a href=\"#\"><span>Jumper & Cardigans</span></a></li>\r\n                        <li><a href=\"#\"><span>Autumn Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Winter Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                        <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                     </ul>\r\n                  </li>\r\n                  <li>\r\n                     <a href=\"#\"><i class=\"icon-user-female\"></i> Women</a>\r\n                     <a class=\"submenu-toggler\" href=\"#\"><i class=\"arrow_carrot-down\"></i></a>\r\n                     <ul>\r\n                        <li><a href=\"#\"><span>Shirts</span></a></li>\r\n                        <li><a href=\"#\"><span>Jumper & Cardigans</span></a></li>\r\n                        <li><a href=\"#\"><span>Autumn Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Winter Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                        <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                     </ul>\r\n                  </li>\r\n                  <li>\r\n                     <a href=\"#\"><i class=\"icon-screen-desktop\"></i> Electronics</a>\r\n                     <a class=\"submenu-toggler\" href=\"#\"><i class=\"arrow_carrot-down\"></i></a>\r\n                     <ul>\r\n                        <li><a href=\"#\"><span>Shirts</span></a></li>\r\n                        <li><a href=\"#\"><span>Jumper & Cardigans</span></a></li>\r\n                        <li><a href=\"#\"><span>Autumn Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Winter Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Leather Jackets</span></a></li>\r\n                        <li><a href=\"#\"><span>Jeans</span></a></li>\r\n                        <li><a href=\"#\"><span>Shoes</span></a></li>\r\n                     </ul>\r\n                  </li>\r\n               </ul>\r\n               <p><i class=\"icon-call-in\"></i> + 1 (800) 2364 332 23 16</p>\r\n               <p><i class=\"icon-envelope\"></i>your@email.com</p>\r\n            </div>\r\n         </nav>\r\n      </div>\r\n      <!-- mobile menu end -->\r\n      <!-- page header begin -->\r\n      <div class=\"pg-header\">\r\n         <div class=\"container\">\r\n            <div class=\"row\">\r\n               <div class=\"col-md-6 col-sm-12 title\">\r\n                  <h1>Page Title</h1>\r\n               </div>\r\n               <div class=\"col-md-6 col-sm-12\">\r\n                  <div class=\"b-crumbs pull-right\"><a href=\"#\">Home</a> <i class=\"arrow_carrot-right\"></i> Basic Page</div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <!-- page header end -->\r\n\r\n   </header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(profileService) {
        this.profileService = profileService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // Fetch the featured products and show it in popular
    };
    HeaderComponent.prototype.getUserDetails = function () {
        //console.log("The details are "+JSON.stringify(userDetails))
        this.profileService.getUserDetails().subscribe(function (data) {
            if (data) {
                alert("success " + data);
            }
            else {
                alert("failed");
            }
        }, function (err) { return console.log(err); });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n       <div class=\"container\">\r\n          <div class=\"gap-50\"></div>\r\n          <div class=\"text-center\">\r\n             <ul class=\"product-categories moving-hover-line\" role=\"tablist\">\r\n                <li class=\"active\"><a href=\"#pl-new-products\" role=\"tab\" data-toggle=\"tab\">New Products</a></li>\r\n                <li><a href=\"#pl-featured\" role=\"tab\" data-toggle=\"tab\">Featured</a></li>\r\n                <li><a href=\"#pl-bestsellers\" role=\"tab\" data-toggle=\"tab\">Bestsellers</a></li>\r\n                <li class=\"hover-line\"></li>\r\n             </ul>\r\n          </div>\r\n          <div class=\"tab-content tab-no-style\">\r\n             <div class=\"tab-pane fade in active\" id=\"pl-new-products\">\r\n                <div class=\"products-list pl-carousel\">\r\n                   <div class=\"pl-controls\">\r\n                      <a href=\"#\" class=\"pl-ctl-left\"></a>\r\n                      <a href=\"#\" class=\"pl-ctl-right\"></a>\r\n                   </div>\r\n                   <ul class=\"pl-pages\">\r\n                      <li class=\"active\">\r\n                         <div class=\"row\" >\r\n                              <div class=\"col-md-3 col-sm-6 pl-item\" \r\n                              *ngFor=\"let product of products | paginate: { itemsPerPage: 8, currentPage: p }\">\r\n                                    <!--For loop for products and list here by ngFor---->\r\n                               <app-product [product]=product>\r\n                              </app-product>\r\n\r\n                           </div>\r\n                        </div>\r\n                      </li>\r\n                   </ul>\r\n                   <div class=\"pl-controls plc-bottom\">\r\n\r\n                     <pagination-controls (pageChange)=\"p = $event\">\r\n                     </pagination-controls>\r\n\r\n                   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    \r\n\r\n\r\n </div> <!-- pg-body -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/products */ "./src/app/constants/products.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService, toastService, inventoryService) {
        this.productService = productService;
        this.toastService = toastService;
        this.inventoryService = inventoryService;
        this.p = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getProductCount().subscribe(function (data) {
            _this.totalLength = data['data'];
        }, function (error) {
            _this.toastService.showError(_constants_products__WEBPACK_IMPORTED_MODULE_3__["ProductConstants"].ERROR_OCCURRED, _constants_products__WEBPACK_IMPORTED_MODULE_3__["ProductConstants"].ERROR_FETCHING_TOTAL_PRODUCTS);
        });
        this.productService.getAllProducts().subscribe(function (data) {
            _this.products = data['data'].content;
        }, function (error) {
            _this.toastService.showError(_constants_products__WEBPACK_IMPORTED_MODULE_3__["ProductConstants"].ERROR_OCCURRED, _constants_products__WEBPACK_IMPORTED_MODULE_3__["ProductConstants"].ERROR_FETCHING_PRODUCTS);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inventory.service.ts":
/*!**************************************!*\
  !*** ./src/app/inventory.service.ts ***!
  \**************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        //TODO To come from environemnt
        this.httpPrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].httpPrefix;
        this.inventoryPrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].inventoryUrl;
        this.categoryPrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].categoryUrl;
        this.inventoryUrl = this.httpPrefix + this.inventoryPrefix;
        this.categoryUrl = this.httpPrefix + this.categoryPrefix;
    }
    InventoryService.prototype.getProducts = function (pageData) {
        return this.http.get(this.inventoryUrl, { params: pageData });
    };
    InventoryService.prototype.getProduct = function (id) {
        return this.http.get(this.inventoryUrl + id);
    };
    InventoryService.prototype.createProduct = function (product) {
        return this.http.post(this.inventoryUrl, product);
    };
    InventoryService.prototype.deleteProduct = function (productId) {
        return this.http.delete(this.inventoryUrl + productId);
    };
    InventoryService.prototype.editProduct = function (productId, product) {
        return this.http.put(this.inventoryUrl + productId, product);
    };
    InventoryService.prototype.editReview = function (productId, index, review) {
        return this.http.put(this.inventoryUrl + productId + "/review/" + index, review);
    };
    /**
     * Implement
     * @param productId
     * @param review
     */
    InventoryService.prototype.addProductReview = function (productId, review) {
        return this.http.post(this.inventoryUrl + productId + "/review", review);
    };
    InventoryService.prototype.getProductCount = function () {
        return this.http.get(this.inventoryUrl + "length");
    };
    InventoryService.prototype.getCategories = function () {
        return this.http.get(this.categoryUrl);
    };
    InventoryService.prototype.createCategory = function (category) {
        return this.http.post(this.categoryUrl, category);
    };
    InventoryService.prototype.getCategory = function (categoryId) {
        return this.http.get(this.categoryUrl + categoryId);
    };
    InventoryService.prototype.deleteCategory = function (categoryId) {
        return this.http.delete(this.categoryUrl + categoryId);
    };
    InventoryService.prototype.editCategory = function (categoryId, category) {
        return this.http.put(this.categoryUrl + categoryId, category);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-default\" routerLink=\"/profile/inventory/\" routerLinkActive=\"btn-sec-col\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n      Products\r\n    </a>\r\n    <a class=\"btn btn-default\" routerLink=\"categories\" routerLinkActive=\"btn-sec-col\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n      Categories\r\n    </a>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-12-md\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.isUserLoggedIn = function () {
        //TODO: will be replaced with actual implementation. 
        return false;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n      <div class=\"container login-register\">\r\n         <div class=\"row\">\r\n            <div class=\"whith-f-t\">\r\n               <p>Login / register with facebook or  twitter</p><br>\r\n               <div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"large\" \r\n               data-button-type=\"login_with\" data-show-faces=\"false\" \r\n               data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div>\r\n              \r\n               <!-- <a href=\"#\" class=\"facebook\"><span class=\"icon-social-facebook\"></span>facebook</a> -->\r\n               <a href=\"#\" class=\"twitter\"><span class=\"icon-social-twitter\" onClick=FB.logout()></span>twitter</a>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 login\">\r\n               <form action=\"/\" class=\"validation-engine\">\r\n                  <h6>LOGIN</h6>\r\n                  <div class=\"required form-group\">\r\n                     <p>User name or email adress *</p>\r\n                     <input type=\"text\" name=\"username\" class=\"form-control validate[required]\" data-prompt-position=\"topLeft\" >\r\n                  </div>\r\n                  <div class=\"required form-group\">\r\n                     <p>Password *</p>\r\n                     <input type=\"password\" name=\"password\" class=\"form-control validate[required]\" data-prompt-position=\"topLeft\" >\r\n                  </div>\r\n                  <p>\r\n                     <input type=\"checkbox\" name=\"remember\" id=\"checkbox1\" class=\"stl\" value=\"2\">\r\n                     <label for=\"checkbox1\" class=\"stl\"><span></span>Remember me</label>\r\n                     <a href=\"#\">Fogot your password?</a><br>\r\n                  </p>\r\n                  <input type=\"submit\" name=\"login\" class=\"btn btn-third-col\" value=\"LOGIN\">\r\n               </form>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 register\">\r\n               <form action=\"/\" class=\"validation-engine\">\r\n                  <h6>REGISTER</h6>\r\n                  <div class=\"required form-group\">\r\n                     <p>User name or email adress *</p>\r\n                     <input type=\"text\" name=\"username\" class=\"form-control validate[required]\" data-prompt-position=\"topLeft\" >\r\n                  </div>\r\n                  <div class=\"required form-group\">\r\n                     <p>Password *</p>\r\n                     <input type=\"password\" name=\"password\" class=\"form-control validate[required]\" data-prompt-position=\"topLeft\" >\r\n                  </div>\r\n                  <p>Try our demo account – Username: <span>Azelabteam</span>,  Password: <span>Azelabteam</span></p>\r\n                  <input type=\"submit\" name=\"login\" class=\"btn btn-third-col\" value=\"REGISTER\">\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/address.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/address.model.ts ***!
  \*****************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(id, firstName, lastName, email, company, city, state, country, postalCode, addressValue, userId, billingAddress, shippingAddress) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.company = company;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.addressValue = addressValue;
        this.userId = userId;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/ngx-ui-loader.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ngx-ui-loader.module.ts ***!
  \*****************************************/
/*! exports provided: NgxUILoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUILoaderModule", function() { return NgxUILoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var loaderConf = {
    "bgsColor": "#ffffff",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-scale-multiple",
    "blur": 5,
    "fgsColor": "#d89900",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "rectangle-bounce",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#00ACC1",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "threshold": 500
};
var NgxUILoaderModule = /** @class */ (function () {
    function NgxUILoaderModule() {
    }
    NgxUILoaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderModule"].forRoot(loaderConf),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true })
            ],
            exports: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderModule"]]
        })
    ], NgxUILoaderModule);
    return NgxUILoaderModule;
}());



/***/ }),

/***/ "./src/app/order-history/order-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-history/order-history.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-history/order-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-history/order-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n    <div class=\"container\">\r\n       \r\n       <div class=\"row\">\r\n         \r\n          <div class=\"col-md-10 col-sm-12 col-xs-12\">\r\n             <h6 class=\"account-table-head\">Order History</h6>\r\n\r\n             <div class=\"table_block table-responsive clearfix\" id=\"order-detail-content\">\r\n                <table class=\"table table-bordered\" id=\"cart_summary\">\r\n                   <thead>\r\n                      <tr>\r\n                         <th colspan=\"2\" class=\"cart_product first_item\">Product name</th>\r\n                         <th>ORDER NO</th>\r\n                         <th>ORDER DATE</th>\r\n                         <th>STATUS</th>\r\n                         <th>SHIP DATE</th>\r\n                         <th class=\"cart_unit item\">PRICE</th>\r\n                      </tr>\r\n                   </thead>\r\n                   <tbody class=\"dropdown-product-list\">\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"ORDER NO\" class=\"default\">\r\n                            <span>#456783</span>\r\n                         </td>\r\n                         <td data-title=\"ORDER DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"STATUS\" class=\"default\">\r\n                            <span>Open</span>\r\n                         </td>\r\n                         <td data-title=\"SHIP DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"old-price\">$ 1400.00</span>\r\n                            <span class=\"price\">$ 1200.00</span>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-2.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"ORDER NO\" class=\"default\">\r\n                            <span>#456783</span>\r\n                         </td>\r\n                         <td data-title=\"ORDER DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"STATUS\" class=\"default\">\r\n                            <span>Open</span>\r\n                         </td>\r\n                         <td data-title=\"SHIP DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$ 800.00</span>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-3.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html#\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"ORDER NO\" class=\"default\">\r\n                            <span>#456783</span>\r\n                         </td>\r\n                         <td data-title=\"ORDER DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"STATUS\" class=\"default\">\r\n                            <span>Open</span>\r\n                         </td>\r\n                         <td data-title=\"SHIP DATE\" class=\"date\">\r\n                            <span>20/06/2016</span>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$ 800.00</span>\r\n                         </td>\r\n                      </tr>\r\n                   </tbody>\r\n                </table>\r\n                <div class=\"container col-xs-12 tfoot\">\r\n                   <p class=\"row info\"><span class=\"pull-left col-xs-6\">Shipment Free</span><span class=\"pull-right col-xs-6 text-right\">$10.00</span></p>\r\n                   <p class=\"row info total\"><span class=\"pull-left col-xs-6\">Total Amount</span><span class=\"col-xs-6 pull-right text-right\">$2400.00</span></p>\r\n                </div>\r\n             </div>\r\n          </div>   \r\n       </div>\r\n    </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/order-history/order-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/order-history/order-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/photo.service.ts":
/*!**********************************!*\
  !*** ./src/app/photo.service.ts ***!
  \**********************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.uploadPath = 'https://api.cloudinary.com/v1_1/dynyihryy/upload';
        this.presetName = 'rdv5w76r';
    }
    PhotoService.prototype.uploadPhoto = function (event) {
        var fd = new FormData();
        fd.append('folder', 'products');
        fd.append('file', event.target.files[0]);
        fd.append('upload_preset', this.presetName);
        return this.http.post(this.uploadPath, fd);
    };
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"pg-body clearfix\">\r\n  <div class=\"container clearfix\">\r\n     <div class=\"row\">\r\n        <div class=\"container\">\r\n           <div class=\"col-xs-12 product-top-line\">\r\n              <a [routerLink]=\"['/home']\" class=\"btn btn-yet-col col-xs-2 back-catalog pull-left\">BACK IN CATALOG</a>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-7 col-xs-12 product-images\">\r\n           <div class=\"clearfix zoom-content\">\r\n             <div class=\"clearfix thumbnails\">\r\n               <div class=\"img-zoom-container\" *ngIf=\"productItem?.mainImageUrl; else noImageBlock\"\r\n               (mouseenter)=\"imageZoom('product-detail-image', 'zoomedPic');\"\r\n               (mouseleave)=\"zoomout()\">\r\n                  <img id=\"product-detail-image\" [src]=\"productItem?.mainImageUrl\"\r\n                  >   \r\n               </div> \r\n               <ng-template #noImageBlock>\r\n                  <img src=\"assets/images/no-image-available.jpg\"\r\n                   id=\"no-product-detail-image\">\r\n               </ng-template>\r\n              </div>\r\n\r\n             \r\n           </div>\r\n           <div class=\"article-info col-xs-12\">\r\n              <div class=\"for-border-top share-wrapp clearfix\">\r\n                <!--TO DO-->\r\n                 <span class=\"h7\">SHARE PRODUCT</span>\r\n                 <ul class=\"list-inline social-buttons\">\r\n                     <li>\r\n                        <fb-like url=\"https://www.facebook.com/Amcart-368639920621352\"></fb-like>\r\n                     </li>\r\n                     <li class=\"tweet-social-tag\">\r\n                        <tweet text=\"{{tweetMsg}}\"></tweet></li>\r\n                     <li>\r\n                        <google-plus class=\"gplus\"></google-plus></li>\r\n                     <li>\r\n                        <linkedin-share></linkedin-share></li>\r\n                 </ul>\r\n              </div>\r\n            \r\n           </div> \r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-5 col-xs-12 product-info\">\r\n            <div #zoomPicContainer id=\"zoomedPic\" class=\"img-zoom-result\"></div>\r\n           <div class=\"product-reviews\">\r\n        \r\n              <h3>{{productItem?.productName}}</h3>\r\n              <span class=\"stars-rating stars-{productItem.ratings}\"><span class=\"stars\"></span></span>\r\n              <a [routerLink]=\"['/review', productItem?.id]\" \r\n              *ngIf=\"productItem?.reviews?.length > 0\"\r\n             >{{productItem.reviews.length}} Reviewer(s)</a>\r\n              <a (click)=\"scroll(reviewContainer)\">Add Review</a>\r\n           </div>\r\n           <div class=\"hr\"></div>\r\n           <div class=\"price\">\r\n              Rs {{productItem?.price}}\r\n              <!-- <span class=\"old-price\">$900.00</span> -->\r\n           </div>\r\n\r\n           <div class=\"hr\"></div>\r\n           <p class=\"data-info\">Product Code: <span>{{productItem?.productCode}}</span></p>\r\n           <p class=\"data-info\">Product Tags: \r\n              <span *ngFor=\"let tag of productItem.tags; let isLast=last\">\r\n               {{tag}} {{isLast ? '' : ', '}}\r\n              </span></p>\r\n           <p class=\"data-info\">Category: <span>\r\n              {{productItem?.categoryId.name}}\r\n           </span></p>\r\n           <div class=\"hr\"></div>\r\n           <p>{{productItem?.description}}</p>\r\n           <div class=\"col-xs-12 tech-info\">\r\n              <div class=\"col-sm-4 col-xs-12\" *ngFor=\"let specs of productItem?.specifications\">\r\n               <div>{{specs.key}}: {{specs.value}}</div>\r\n              </div>\r\n           </div>\r\n          \r\n       <span class=\"data-info secondary-font-family\">COLOR:</span>\r\n           <div></div>\r\n           <p class=\"availability col-sm-pull-right col-xs-pull-left\">\r\n               Availability: \r\n               <span *ngIf=\"inStock\" >\r\n                  <span class=\"in-stock\"></span>In Stock\r\n               </span>\r\n               <span *ngIf=\"!inStock\">\r\n                  <span class=\"out-stock\"></span>Out of Stock\r\n               </span>\r\n            </p>\r\n           <span class=\"color-blocks\" *ngFor=\"let c of colors; index as i\">\r\n               <div class=\"radio-inline color\" \r\n               (click)=\"handleColorChange(i)\">\r\n                  <label for=\"radio-color-{i}\" class={{c}}>\r\n                  </label>\r\n               </div>\r\n            </span>\r\n            \r\n          \r\n           <div class=\"hr\"></div>\r\n           <div class=\"cart_quantity_button clrfix product-count pull-left\">\r\n              <!-- <a rel=\"nofollow\" class=\"btn btn-default btn-minus\" href=\"#\" title=\"Subtract\">&ndash;</a> -->\r\n              <button title=\"Subtract\" (click)=\"reduceCount(quantity)\" class=\"cart_quantity_input form-control grey btn-minus\" rel=\"nofollow\">-</button>\r\n              <input type=\"text\" [(ngModel)]=\"quantity\" disabled=\"\" size=\"2\" autocomplete=\"off\" class=\"cart_quantity_input form-control grey count\" value=\"1\" name=\"quantity\">\r\n              <button title=\"Add\" (click)=\"addCount(quantity)\" href=\"#\" class=\"cart_quantity_input form-control grey cart-plus\" rel=\"nofollow\">+</button>\r\n              <!-- <a rel=\"nofollow\" class=\"btn btn-default btn-plus\" href=\"#\" title=\"Add\">+</a> -->\r\n           </div>\r\n           <button class=\"btn btn-sec-col pull-left add-cart\" (click)=\"addCart(product)\"><i class=\"icon-bag\"></i>&nbsp;&nbsp;ADD TO CART</button>\r\n           <button class=\"btn btn-gray\" (click)=\"addWishlist(product)\"><span class=\"icon-heart\"></span></button>\r\n           <a href=\"\" class=\"btn btn-gray\"><span class=\"arrow_left-right_alt\"></span></a>\r\n           <div class=\"hr\"></div>\r\n           <div class=\"product-tabs\">\r\n              <!-- Nav tabs -->\r\n              <ul role=\"tablist\" class=\"nav nav-tabs\">\r\n                  <li [ngClass]=\"{active : activeTab==='description'}\">\r\n                     <a data-toggle=\"tab\" role=\"tab\" \r\n                     href=\"#tab-description\"\r\n                     (click)=\"switchTab('description')\">DESCRIPTION</a></li>\r\n                  <li [ngClass]=\"{active : activeTab==='review'}\">\r\n                     <a data-toggle=\"tab\" role=\"tab\" \r\n                     href=\"#tab-review\" id=\"review-btn\" \r\n                     (click)=\"switchTab('review')\">REVIEWS</a></li>\r\n               </ul>\r\n               <div class=\"tab-content\">\r\n                     <div id=\"tab-description\" class=\"tab-pane active\"\r\n                     *ngIf=\"activeTab === 'description'\">      \r\n                        <p>{{productItem.description}}</p>\r\n                     </div>\r\n                     \r\n                     <div id=\"tab-review\" \r\n                     #reviewContainer\r\n                     class=\"tab-pane\" \r\n                     *ngIf=\"activeTab === 'review'\">\r\n                        <form #reviewForm=\"ngForm\" (ngSubmit)=\"submitReview(reviewForm)\">\r\n                           <div class=\"row\" >\r\n                              <div class=\"col-md-6 col-xs-12\">\r\n                                 <div class=\"form-group required\">\r\n                                    <label class=\"type-text\">Name*\r\n                                       <input type=\"text\" class=\"form-control placeholder-fix\"\r\n                                       [(ngModel)]=\"reviewForm.name\"\r\n                                       name=\"name\"\r\n                                       >\r\n                                    </label></div>\r\n                              </div>\r\n                             \r\n                              <div class=\"col-md-6 col-xs-12\">\r\n                                 <div class=\"form-group required\">\r\n                                    <label class=\"type-text\">Email*\r\n                                       <input type=\"email\" class=\"form-control placeholder-fix\"\r\n                                       [(ngModel)]=\"reviewForm.email\"\r\n                                       pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                       name=\"email\">\r\n                                    </label></div>\r\n                              </div>\r\n                              <div class=\"col-xs-12\">\r\n                                 <div class=\"you-rating form-control\" >\r\n                                    <div class=\"data-info secondary-font-family\">Your Rating</div>\r\n                                    <a (click)=\"rating = 1\">\r\n                                       <span class=\"stars-rating stars-1\"\r\n                                       ><span class=\"stars\"></span></span></a>\r\n                                    <a (click)=\"rating = 2\">\r\n                                       <span class=\"stars-rating stars-2\"\r\n                                       ><span class=\"stars\"></span></span></a>\r\n                                    <a (click)=\"rating = 3\">\r\n                                       <span class=\"stars-rating stars-3\"\r\n                                       ><span class=\"stars\"></span></span></a>\r\n                                    <a (click)=\"rating = 4\">\r\n                                       <span class=\"stars-rating stars-4\"\r\n                                       ><span class=\"stars\"></span></span></a>\r\n                                    <a (click)=\"rating = 5\">\r\n                                       <span class=\"stars-rating stars-5\"\r\n                                       ><span class=\"stars\"></span></span></a>\r\n                                 </div>\r\n                                 <div class=\"data-info secondary-font-family\">Your Review</div>\r\n                                 <div class=\"required form-group\">\r\n                                    <textarea \r\n                                    class=\"form-control placeholder-fix\" \r\n                                    rows=\"4\"\r\n                                    name=\"reviewContent\"\r\n                                    [(ngModel)]=\"reviewForm.review\"></textarea>\r\n                                 </div>\r\n                                 <button type=\"submit\" \r\n                                 class=\"btn btn-lg btn-sec-col col-xs-12\"\r\n                                 [disabled]=\"!reviewForm.form.valid\"\r\n                                 >SUBMIT REVIEW</button>\r\n                              </div>\r\n                           </div>\r\n                        </form>\r\n                  </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n  <section>\r\n     <div class=\"container best-product\">\r\n        <div class=\"col-xs-12\"><h6>RELATED PRODUCTS</h6></div>\r\n        <div class=\"gap-70\"></div>\r\n        <div class=\"products-list pl-carousel\">\r\n           <ul class=\"pl-pages\">\r\n              <li class=\"active\">\r\n                 <div class=\"row\">\r\n                    <!-- <app-product></app-product> -->\r\n                 </div>\r\n              </li>\r\n              \r\n           </ul>\r\n           <div class=\"pl-controls\">\r\n              <a href=\"#\" class=\"pl-ctl-left\"></a>\r\n              <a href=\"#\" class=\"pl-ctl-right\"></a>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </section>\r\n\r\n \r\n</div> <!-- pg-body -->\r\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/products */ "./src/app/constants/products.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, toastService, inventoryService) {
        this.route = route;
        this.productService = productService;
        this.toastService = toastService;
        this.inventoryService = inventoryService;
        this.quantity = 1;
        this.colors = [];
        this.sizes = [];
        this.cartProduct = {
            "orderItemId": "",
            "orderId": "",
            "productId": "",
            "variantId": "",
            "quantity": "",
            "price": ""
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inStock = true;
        this.tweetMsg = _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].TWEET_MSG;
        this.activeTab = _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].DESCRIPTION_TAB;
        this.productId = this.route.snapshot.params['id'];
        this.productService.getProductDetail(this.productId).subscribe(function (data) {
            _this.productItem = data['data'];
            _this.fetchAllVariants(data['data']);
        }, function (error) {
            _this.toastService.showGenericBackendError();
        });
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        this.zoomPicContainer.nativeElement.style.display = "none";
    };
    ProductDetailComponent.prototype.addCount = function (value) {
        //  var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        this.quantity = val + 1;
        // $count.val(val+1);
        return false;
    };
    ProductDetailComponent.prototype.reduceCount = function (value) {
        //   var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        if (val > 0)
            this.quantity = val - 1;
        return false;
    };
    ProductDetailComponent.prototype.addCart = function (product) {
        this.cartProduct.orderItemId = product.orderItemId;
        this.cartProduct.orderId = product.orderId;
        this.cartProduct.productId = product.id;
        this.cartProduct.variantId = product.variantId;
        this.cartProduct.quantity = product.quantity;
        this.cartProduct.price = product.price;
        product.quantity = this.quantity;
        this.productService.addItemtoCart(this.cartProduct).subscribe(function (data) {
            if (data) {
                alert("success " + data);
            }
            else {
                alert("failed");
            }
        }, function (err) { return console.log(err); });
        console.log(JSON.stringify(product));
    };
    ProductDetailComponent.prototype.addWishlist = function (product) {
        this.cartProduct.orderItemId = product.orderItemId;
        this.cartProduct.orderId = product.orderId;
        this.cartProduct.productId = product.id;
        this.cartProduct.variantId = product.variantId;
        this.cartProduct.quantity = product.quantity;
        this.cartProduct.price = product.price;
        product.quantity = this.quantity;
        this.productService.addItemtoWishlist(this.cartProduct).subscribe(function (data) {
            if (data) {
                alert("success " + data);
            }
            else {
                alert("failed");
            }
        }, function (err) { return console.log(err); });
    };
    ProductDetailComponent.prototype.fetchAllVariants = function (data) {
        var colors = [];
        var sizes = [];
        data.variants.forEach(function (data) {
            colors.push(data.color);
            sizes.push(data.size);
        });
        this.colors = colors;
        this.sizes = sizes;
    };
    ProductDetailComponent.prototype.handleColorChange = function (index) {
        if (this.productItem.variants[index]['quantity'] > 0) {
            this.stock = 'IN STOCK';
            this.inStock = true;
        }
        else {
            this.stock = 'OUT STOCK';
            this.inStock = false;
        }
    };
    ProductDetailComponent.prototype.submitReview = function (reviewForm) {
        var _this = this;
        reviewForm.form.value.ratings = this.rating;
        this.inventoryService.addProductReview(this.productId, reviewForm.form.value)
            .subscribe(function (data) {
            _this.toastService.showSuccess(_constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].SUCCESS_MSG, _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].REVIEW_SUCCESS);
            _this.reviewForm.reset();
            _this.productItem['reviews'] = data['data'].reviews;
        }, function (error) {
            _this.toastService.showError(_constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].ERROR_OCCURRED, _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].REVIEW_ERROR);
        });
    };
    ProductDetailComponent.prototype.switchTab = function (tab) {
        this.activeTab = tab;
    };
    ProductDetailComponent.prototype.scroll = function (el) {
        this.activeTab = _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].REVIEW_TAB;
        el.scrollIntoView();
    };
    ProductDetailComponent.prototype.zoomout = function () {
        this.zoomPicContainer.nativeElement.style.display = "none";
    };
    ProductDetailComponent.prototype.imageZoom = function (imgID, resultID) {
        // let zoomedArea = document.getElementById("zoomedPic");
        // zoomedArea.setAttribute("class", "display: none");
        this.zoomPicContainer.nativeElement.style.display = "block";
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {
                x = img.width - lens.offsetWidth;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > img.height - lens.offsetHeight) {
                y = img.height - lens.offsetHeight;
            }
            if (y < 0) {
                y = 0;
            }
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomPicContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductDetailComponent.prototype, "zoomPicContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reviewForm'),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "reviewForm", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div class=\"row\">\r\n  <h3>Products</h3>\r\n  <button routerLink=\"addproduct\" class=\"btn btn-sec-col pull-right\">Add New Product</button>\r\n</div>\r\n<br>\r\nShow Products:\r\n<select (change)=\"pageSize=$event.target.value;getProducts()\">\r\n    <option>5</option>\r\n    <option>10</option>\r\n    <option>25</option>\r\n    <option>50</option>\r\n</select>\r\n<br>\r\n\r\n <p-table [value]=\"products\">\r\n    <ng-template pTemplate=\"header\">\r\n        <tr>\r\n            <th>Code</th>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n            <th>Price</th>\r\n            <th>Quantity</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-product>\r\n        <tr>\r\n            <td>{{product.code}}</td>\r\n            <td>{{product.name}}</td>\r\n            <td>{{product.description}}</td>\r\n            <td>{{product.price}}</td>\r\n            <td>{{product.quantity}}</td>\r\n            <td><button  [routerLink]=\"['editproduct',product.id]\" class=\"btn\">Edit</button>\r\n                <button class=\"btn\" (click)=\"deleteProduct(product.id)\">Delete</button></td>\r\n        </tr>\r\n    </ng-template>\r\n</p-table>\r\n<p-paginator [rows]=\"pageSize\" [totalRecords]=\"totalRecords\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(inventoryService, toastService) {
        this.inventoryService = inventoryService;
        this.toastService = toastService;
        this.totalRecords = 0;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.inventoryService.getProducts({
            pageSize: this.pageSize,
            page: this.pageNumber
        })
            .subscribe(function (res) {
            _this.initListing(res.data);
        }, (function (error) {
            _this.toastService.showGenericBackendError();
        }));
    };
    ProductListComponent.prototype.initListing = function (data) {
        this.products = data.content.map(function (product) {
            var quantity = 0;
            if (product.variants) {
                product.variants.forEach(function (variant) {
                    quantity += variant.quantity;
                });
            }
            return {
                id: product.id,
                code: product.productCode,
                name: product.productName,
                price: product.price,
                description: product.description,
                quantity: quantity
            };
        });
        this.totalRecords = data.totalElements;
    };
    ProductListComponent.prototype.deleteProduct = function (productId) {
        var _this = this;
        this.inventoryService.deleteProduct(productId)
            .subscribe(function (res) {
            _this.getProducts();
            _this.toastService.showSuccess("Product Deleted", "Succesfully deleted Product");
        }, (function (error) {
            _this.toastService.showGenericBackendError();
        }));
    };
    ProductListComponent.prototype.paginate = function (event) {
        this.pageNumber = (event.first / this.pageSize) + 1;
        this.getProducts();
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-review/product-review.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-review/product-review.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-review/product-review.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-review/product-review.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n    <div class=\"container review\">\r\n       <div class=\"row comment\" *ngFor=\"let review of reviews; let i=index\">\r\n          <div class=\"container\">\r\n             <div class=\"img-cover\"><img src=\"images/review/avatar-1.jpg\" alt=\"avatar\"></div>\r\n             <div class=\"data\">\r\n               <div class=\"comment-info\">\r\n                   <span class=\"name\">{{review.name}}</span>\r\n                   <span class=\"stars-rating stars-{{review.ratings}}\">\r\n                      <span class=\"stars\"></span>\r\n                   </span>\r\n                </div>\r\n                <span class=\"like-wrapper col-xs-12 col-sm-3\">\r\n                   <span class=\"like\">\r\n                      <a (click)=\"likeReview(i)\">\r\n                        <span class=\"icon-like\"></span></a><span class=\"count\">{{review.likes}}</span>\r\n                   </span>\r\n                   <span class=\"dislike\">\r\n                      <a (click)=\"dislikeReview(i)\">\r\n                        <span class=\"icon-dislike\"></span></a><span class=\"count\">{{review.dislike}}</span>\r\n                   </span>\r\n                </span>\r\n                <p class=\"comment-text\">{{review.review}}</p>\r\n             </div>\r\n          </div>\r\n       </div>\r\n       <!---To do pagination for reviews-->\r\n       <!-- <div class=\"row nav\">\r\n          <div class=\"wp-pagenavi col-xs-12\">\r\n             <ul class=\"pagination\">\r\n                <li class=\"active\"><a href=\"#\">1</a></li>\r\n                <li><a href=\"#\">2</a></li>\r\n                <li><a href=\"#\">3</a></li>\r\n                <li><a href=\"#\">4</a></li>\r\n                <li><a href=\"#\">5</a></li>\r\n                <li><a href=\"#\"><i class=\"arrow_carrot-right\"></i></a></li>\r\n             </ul>\r\n          </div>\r\n       </div> -->\r\n    </div>\r\n </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-review/product-review.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-review/product-review.component.ts ***!
  \************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/products */ "./src/app/constants/products.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent(route, productService, toastService, inventoryService) {
        this.route = route;
        this.productService = productService;
        this.toastService = toastService;
        this.inventoryService = inventoryService;
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductDetail(this.route.params['value'].id)
            .subscribe(function (data) {
            _this.reviews = data['data'].reviews;
            _this.product = data['data'];
        }, function (error) {
            _this.toastService.showError(_constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].ERROR_OCCURRED, _constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].ERROR_FETCHING_REVIEW);
        });
    };
    ProductReviewComponent.prototype.likeReview = function (index) {
        var review = this.reviews[index];
        if (!review['likes']) {
            review["likes"] = 0;
        }
        review['likes'] += 1;
        this.editReview(this.product['id'], review, index);
    };
    ProductReviewComponent.prototype.dislikeReview = function (index) {
        var review = this.reviews[index];
        if (!review['dislike']) {
            review["dislike"] = 0;
        }
        review['dislike'] += 1;
        this.editReview(this.product['id'], review, index);
    };
    ProductReviewComponent.prototype.editReview = function (id, review, index) {
        var _this = this;
        this.inventoryService.editReview(id, index, review)
            .subscribe(function (data) {
            _this.reviews = data['data'].reviews;
        }, function (error) {
            _this.toastService.showError(_constants_products__WEBPACK_IMPORTED_MODULE_4__["ProductConstants"].ERROR_OCCURRED, "");
        });
    };
    ProductReviewComponent.prototype.ngOnDestroy = function () {
        // this.inventoryService
    };
    ProductReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review',
            template: __webpack_require__(/*! ./product-review.component.html */ "./src/app/product-review/product-review.component.html"),
            styles: [__webpack_require__(/*! ./product-review.component.css */ "./src/app/product-review/product-review.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"]])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.cartProduct = {
            "orderItemId": "",
            "orderId": "",
            "productId": "",
            "variantId": "",
            "quantity": "",
            "price": ""
        };
        this.httpPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].httpPrefix;
        this.inventoryPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].inventoryUrl;
        this.inventoryUrl = this.httpPrefix + this.inventoryPrefix;
    }
    ProductService.prototype.getAllProducts = function (page) {
        if (page === void 0) { page = 1; }
        return this.httpClient.get(this.inventoryUrl +
            "?page=" + page + "&pageSize=" + 100);
    };
    ProductService.prototype.getProductDetail = function (id) {
        return this.httpClient.get(this.inventoryUrl + id);
    };
    //   localhost:8084/order/cart/{userid}
    ProductService.prototype.addItemtoCart = function (product) {
        console.log('added obj: ' + JSON.stringify(product));
        return this.http.post("http://10.175.28.18:8084/cart/1", product);
        //return this.http.put("http://10.175.28.18:8084/cart/"+product.id, product);
    };
    ProductService.prototype.addItemtoWishlist = function (product) {
        return this.http.post("http://10.175.28.18:8084/order/wishlist/1", product);
        // return this.http.put("http://10.175.28.18:8084/order/wishlist/"+product.id, product);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <figure [routerLink]=\"['/product-detail', product?.id]\">\r\n       <a >\r\n          <img [src]=\"product?.mainImageUrl\">\r\n       </a>\r\n       <label class=\"pl-badge\" *ngIf=\"newBadge\">NEW</label>\r\n       <figcaption>\r\n          <a (click)=\"addToCart()\" class=\"pl-button pl-addcart\" \r\n          data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\">\r\n            <i class=\"icon-bag\"></i>\r\n          </a>\r\n          <a (click)=\"quickView()\" class=\"pl-button pl-qview\" \r\n          data-toggle=\"tooltip\" data-placement=\"top\" title=\"Quick View\">\r\n            <i class=\"icon-eye\"></i>\r\n          </a>\r\n          <a (click)=\"compare()\" class=\"pl-button pl-compare\"\r\n           data-toggle=\"tooltip\" data-placement=\"top\" title=\"Compare\">\r\n            <i class=\"arrow_left-right_alt\"></i>\r\n          </a>\r\n          <a (click)=\"addToWishlist()\" class=\"pl-button pl-wishlist\" \r\n          data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Wish List\">\r\n            <i class=\"icon-heart\"></i>\r\n          </a>\r\n       </figcaption>\r\n    </figure>\r\n    <div class=\"pl-caption\" *ngIf=\"product\">\r\n       <p class=\"pl-price-block\">\r\n          <!-- <span class=\"pl-price-old\">$ 660.00</span> -->\r\n          <span class=\"pl-price\">Rs {{product?.price}}</span>\r\n       </p>\r\n       <p class=\"pl-name\">{{product?.productName}}</p>\r\n       <!-- <p class=\"pl-name\">{{product.description}}</p> -->\r\n       <span class=\"stars-rating stars-{product.ratings}\"><span class=\"stars\"></span></span>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function () {
    };
    ProductComponent.prototype.quickView = function () {
    };
    ProductComponent.prototype.compare = function () {
    };
    ProductComponent.prototype.addToWishlist = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile.service.ts":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.httpPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].httpPrefix;
        this.uploadPath = 'https://api.cloudinary.com/v1_1/dynyihryy/upload';
        this.usersApiPath = '/profile/users/';
        this.addressApiPath = '/addresses/';
    }
    ProfileService.prototype.saveProfileOnCdn = function (picture) {
        return this.http.post(this.uploadPath, picture);
    };
    ProfileService.prototype.saveUserDetails = function (userDetails) {
        return this.http.put(this.httpPrefix + this.usersApiPath + '1', userDetails);
    };
    ProfileService.prototype.getUserDetails = function () {
        return this.http.get(this.httpPrefix + this.usersApiPath + '1');
    };
    ProfileService.prototype.updateAddress = function (address) {
        return this.http.put(this.getAddressApiPath() + address.id, address);
    };
    ProfileService.prototype.saveAddress = function (address) {
        return this.http.post(this.getAddressApiPath(), address);
    };
    ProfileService.prototype.deleteAddressesForUser = function () {
        return this.http.delete(this.getAddressApiPath());
    };
    ProfileService.prototype.getAddressApiPath = function () {
        return this.httpPrefix + this.usersApiPath + '1' + this.addressApiPath;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n    <div class=\"container\">\r\n       <div class=\"row\">\r\n          <div class=\"container\">\r\n             <table class=\"user-info\">\r\n                <tr>\r\n                   <td class=\"picture\">\r\n                      <div class=\"img-cover\"><img src=\"{{uploadPic}}\" alt=\"\"></div>\r\n                      <h6 class=\"name\">MICHAEL DOE</h6>\r\n                      <div class=\"change-picture\">\r\n                         <i class=\"icon-camera\"></i>\r\n                         <input type=\"file\" title=\"Choose a picture\" (change)=\"uploadPicture($event)\">\r\n                      </div>\r\n                   </td>\r\n                   <td>\r\n                      <div class=\"col-xs-12 wellcome\">\r\n                         <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-4\">\r\n                            <h4>Good Morning <span>Michael</span></h4>\r\n                            <p>Welcome to your account. Here you can \r\n                            manage all of your personal information.</p>\r\n                         </div>\r\n                         <div class=\"col-lg-5 col-xs-12 col-sm-6 pull-right\">\r\n                            <div class=\"row\">\r\n                               <div class=\"col-xs-12 col-sm-6\">\r\n                                  <p class=\"my-orders\">My Orders:</p>\r\n                                  <p>You have 2 item in your cart</p>\r\n                               </div>\r\n                               <div class=\"col-xs-12 col-sm-6 view-cart\">\r\n                                  <button [routerLink]=\"['/shopping-cart']\" class=\"btn btn-sec-col\"><i class=\"icon-bag\"></i>&nbsp;&nbsp;VIEW CART</button>\r\n                               </div>\r\n                            </div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-xs-12 last\">\r\n                         <!--To do : last loged on info\r\n                         <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-4\">\r\n                            <p>Last loged on:<span>   19.06.2016 – 10:23 pm</span></p>\r\n                         </div>\r\n                         -->\r\n                         <!---To do : last item ordered\r\n                         <div class=\"col-lg-5 col-xs-12 col-sm-6 pull-right\">\r\n                            <div class=\"row\">\r\n                               <p class=\"col-xs-12\">Last item ordered:<span>  Majestic Beecroft Sweater</span>  <span class=\"price\">$800</span></p>\r\n                            </div>\r\n                         </div>\r\n                         -->\r\n                      </div>\r\n                   </td>\r\n                </tr>\r\n             </table>\r\n          </div>\r\n       </div>\r\n       <div class=\"row\">\r\n          <div class=\"col-md-2 left-menu\">\r\n             <a>\r\n                <div routerLink=\"/profile\" routerLinkActive=\"active\" \r\n                [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                  <i class=\"icon-user\"></i><br><span>YOUR PROFILE</span>\r\n               </div></a>\r\n             <a>\r\n                <div routerLink=\"/profile/inventory\" routerLinkActive=\"active\">\r\n                  <i class=\"icon-clock\"></i><br><span>Inventory</span></div></a>\r\n             <a>\r\n                <div [routerLink]=\"['/profile/wishlist']\" routerLinkActive=\"active\">\r\n                  <i class=\"icon-heart\"></i><br><span>WISHLIST</span>\r\n               </div></a>\r\n             <a>\r\n                <div [routerLink]=\"['/profile/order-history']\" routerLinkActive=\"active\">\r\n                   <i class=\"icon-clock\"></i><br><span>HISTORY</span>\r\n               </div></a>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n              <router-outlet></router-outlet>\r\n          </div>\r\n         \r\n       </div>\r\n    </div>\r\n </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
        this.presetName = 'rdv5w76r'; // cloudianry preset name
        this.selectedFile = null;
        this.uploadPic = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //  this.getProfilePicture();
        //  this.getCountries();
    };
    // getProfilePicture(): Observable<any> {
    //   const path = 'https://res.cloudinary.com/dynyihryy/image/list/samples.json';
    //   return this.http.get(path).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError), );
    // }
    ProfileComponent.prototype.uploadPicture = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fd = new FormData();
        fd.append('folder', 'profile');
        fd.append('file', this.selectedFile);
        fd.append('upload_preset', this.presetName);
        this.profileService.saveProfileOnCdn(fd)
            .subscribe(function (res) {
            var body = res;
            _this.uploadPic = body['secure_url'];
            //  console.log(this.uploadPic);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profiledetails/profiledetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profiledetails/profiledetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pl-15\r\n{\r\n    padding-left: 15px;\r\n}"

/***/ }),

/***/ "./src/app/profiledetails/profiledetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profiledetails/profiledetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-sm-12 col-xs-12\" *ngIf=\"isComponentReady\">\r\n   <h6 class=\"account-table-head\">PERSONAL DETAIL</h6>\r\n\r\n   <form (ngSubmit)=\"userProfileForm.form.valid && saveUserDetails(usermodel)\" #userProfileForm=\"ngForm\" class=\"personal-detail\">\r\n      <div class=\"row\">\r\n         <div class=\"col-sm-6 col-xs-12\">\r\n            <div class=\"form-group\">\r\n               <input type=\"radio\" [(ngModel)]=\"usermodel.title\" class=\"stl\" name=\"sex\" id=\"sex-mr\" value=\"Mr.\">\r\n               <label for=\"sex-mr\" class=\"stl\"><span><span></span></span>Mr.</label>\r\n               <input type=\"radio\" [(ngModel)]=\"usermodel.title\" class=\"stl\" name=\"sex\" id=\"sex-ms\" value=\"Ms.\">\r\n               <label for=\"sex-ms\" class=\"stl\"><span><span></span></span>Ms.</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">First Name *<br><input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"usermodel.firstName\"\r\n                     class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && name.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"name.errors.required\">First Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Last Name *<input type=\"text\" #username=\"ngModel\" [(ngModel)]=\"usermodel.lastName\"\r\n                     class=\"form-control placeholder-fix\" name=\"username\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && username.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && username.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"username.errors.required\"> Last Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Email *<input type=\"email\" #email=\"ngModel\" [(ngModel)]=\"usermodel.email\" class=\"form-control placeholder-fix\"\r\n                     name=\"email\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && email.invalid }\" required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\"> Email is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Phone number *<input type=\"tel\" #phone=\"ngModel\" [(ngModel)]=\"usermodel.phone\"\r\n                     class=\"form-control placeholder-fix\" name=\"phone\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && phone.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"phone.errors.required\"> Phone is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Date of Birth *</label>\r\n               <p-calendar [(ngModel)]=\"usermodel.dob\" name=\"dob\"></p-calendar>\r\n            </div>\r\n            {{usermodel.dob}}\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"form-group\" class=\"col-sm-6 col-xs-12\">\r\n            <!---Billing address column-->\r\n            <h6 class=\"account-table-head\">BILLING ADDRESS</h6>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">First Name *<br><input type=\"text\" name=\"billingFirstName\" #billingFirstName=\"ngModel\"\r\n                     [(ngModel)]=\"usermodel.billingAddress.firstName\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && name.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && billingFirstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billingFirstName.errors.required\">First Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Last Name *<br><input type=\"text\" name=\"billingLastName\" #billingLastName=\"ngModel\"\r\n                     [(ngModel)]=\"usermodel.billingAddress.lastName\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && name.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && billingLastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billingLastName.errors.required\">Last Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Company Name *<br>\r\n                  <input type=\"text\" #billingCompanyName=\"ngModel\" [(ngModel)]=\"usermodel.billingAddress.company\" name=\"billing-company-name\"\r\n                     class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billingCompanyName.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && billingCompanyName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billingCompanyName.errors.required\"> Billing company name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Address *<br>\r\n                  <input type=\"text\" #billingAddressInfo=\"ngModel\" [(ngModel)]=\"usermodel.billingAddress.addressValue\"\r\n                     name=\"billing-address\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billingAddressInfo.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && billingAddressInfo.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billingAddressInfo.errors.required\"> Billing Address is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Zip Code *<br>\r\n                  <input type=\"text\" #billingZipCode=\"ngModel\" [(ngModel)]=\"usermodel.billingAddress.postalCode\" name=\"billing-zip-code\"\r\n                     class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billingZipCode.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && billingZipCode.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billingZipCode.errors.required\"> Billing Zip Code is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"required form-group col-xs-12\">\r\n                  <label class=\"type-text\">Country *</label>\r\n                  <select [(ngModel)]=\"usermodel.billingAddress.country\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billCountry.invalid }\"\r\n                     required name=\"bill-country\" #billCountry=\"ngModel\" (change)=\"onBillingChangeCountry($event.target.value)\">\r\n                     <option *ngFor=\"let country of billCountryInfo\" value=\"{{country.name}}\">\r\n                        {{country.name}}\r\n                     </option>\r\n                  </select>\r\n                  <div *ngIf=\"userProfileForm.submitted && billCountry.invalid\" class=\"invalid-feedback\">\r\n                     <div *ngIf=\"billCountry.errors.required\"> Billing country is required</div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Region/State *<br></label>\r\n               <select [(ngModel)]=\"usermodel.billingAddress.state\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billState.invalid }\"\r\n                  required name=\"bill-state\" #billState=\"ngModel\" (change)=\"onChangeState($event.target.value)\">\r\n                  <option *ngFor=\"let state of billStateInfo | keyvalue\" value=\"{{state.key}}\">\r\n                     {{state.key}}\r\n                  </option>\r\n               </select>\r\n               <div *ngIf=\"userProfileForm.submitted && billState.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billState.errors.required\"> Billing state is required</div>\r\n               </div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">City *<br></label>\r\n               <select [(ngModel)]=\"usermodel.billingAddress.city\" name=\"bill-city\" #billCity=\"ngModel\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && billCity.invalid }\" required>\r\n                  <option *ngFor=\"let city of billCityInfo\" value=\"{{city}}\">\r\n                     {{city}}\r\n                  </option>\r\n               </select>\r\n               <div *ngIf=\"userProfileForm.submitted && billCity.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"billCity.errors.required\"> Billing city is required</div>\r\n               </div>\r\n\r\n            </div>\r\n         </div>\r\n         <div class=\"col-sm-6 col-xs-12\" *ngIf=\"!usermodel.sameShippingAddress\">\r\n            <!---Shipping address column-->\r\n            <h6 class=\"account-table-head\">SHIPPING ADDRESS</h6>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">First Name *<br><input type=\"text\" name=\"shippingFirstName\" #shippingFirstName=\"ngModel\"\r\n                     [(ngModel)]=\"usermodel.shippingAddress.firstName\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && name.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingFirstName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingFirstName.errors.required\">First Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Last Name *<br><input type=\"text\" name=\"shippingLastName\" #shippingLastName=\"ngModel\"\r\n                     [(ngModel)]=\"usermodel.shippingAddress.lastName\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && name.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingLastName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingLastName.errors.required\">Last Name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Company Name *<br>\r\n                  <input type=\"text\" #shippingCompanyName=\"ngModel\" [(ngModel)]=\"usermodel.shippingAddress.company\"\r\n                     name=\"shipping-company-name\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shippingCompanyName.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingCompanyName.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingCompanyName.errors.required\"> Shipping company name is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Address *<br>\r\n                  <input type=\"text\" #shippingAddressInfo=\"ngModel\" [(ngModel)]=\"usermodel.shippingAddress.addressValue\"\r\n                     name=\"shipping-address\" class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shippingAddressInfo.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingAddressInfo.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingAddressInfo.errors.required\"> Shipping Address is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Zip Code *<br>\r\n                  <input type=\"text\" #shippingZipCode=\"ngModel\" [(ngModel)]=\"usermodel.shippingAddress.postalCode\" name=\"shipping-zip-code\"\r\n                     class=\"form-control placeholder-fix\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shippingZipCode.invalid }\"\r\n                     required></label>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingZipCode.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingZipCode.errors.required\"> Shipping Zip Code is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"required form-group col-xs-12\">\r\n                  <label class=\"type-text\">Country *</label>\r\n                  <select [(ngModel)]=\"usermodel.shippingAddress.country\" class=\"form-control\" #shippingBillCountry=\"ngModel\"\r\n                     name=\"bill-country-info\" [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shipStateInfo.invalid }\"\r\n                     required (change)=\"onChangeShipCountry($event.target.value)\">\r\n                     <option *ngFor=\"let country of billCountryInfo\" value=\"{{country.name}}\">\r\n                        {{country.name}}\r\n                     </option>\r\n                  </select>\r\n                  <div *ngIf=\"userProfileForm.submitted && shippingBillCountry.invalid\" class=\"invalid-feedback\">\r\n                     <div *ngIf=\"shippingBillCountry.errors.required\"> Shipping country is required</div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">Region/State *<br></label>\r\n               <select [(ngModel)]=\"usermodel.shippingAddress.state\" #shippingState=\"ngModel\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shippingState.invalid }\" required name=\"ship-state-info\"\r\n                  (change)=\"onChangeShipState($event.target.value)\">\r\n                  <option *ngFor=\"let state of shipStateInfo | keyvalue\" value=\"{{state.key}}\">\r\n                     {{state.key}}\r\n                  </option>\r\n               </select>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingState.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingState.errors.required\"> Shipping state is required</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label class=\"type-text\">City *<br></label>\r\n               <select [(ngModel)]=\"usermodel.shippingAddress.city\" name=\"ship-city-info\" #shippingCity=\"ngModel\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': userProfileForm.submitted && shippingCity.invalid }\" required>\r\n                  <option *ngFor=\"let city of shipCityInfo\" value=\"{{city}}\">\r\n                     {{city}}\r\n                  </option>\r\n               </select>\r\n               <div *ngIf=\"userProfileForm.submitted && shippingCity.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"shippingCity.errors.required\"> Shipping city is required</div>\r\n               </div>\r\n            </div>\r\n\r\n         </div>\r\n         \r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"pl-15\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"usermodel.sameShippingAddress\" class=\"stl\" name=\"same-address\" id=\"same-address\">\r\n            <label for=\"same-address\" class=\"stl\"><span><span></span></span>Shipping address is same as billing\r\n               address\r\n            </label>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-xs-12\">\r\n            <button type=\"submit\" class=\"btn btn-lg btn-sec-col\">SAVE SETTINGS</button>\r\n         </div>\r\n      </div>\r\n   </form>\r\n</div>"

/***/ }),

/***/ "./src/app/profiledetails/profiledetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profiledetails/profiledetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _models_address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/address.model */ "./src/app/models/address.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent(profileService, countries) {
        this.profileService = profileService;
        this.countries = countries;
        this.presetName = 'rdv5w76r'; // cloudianry preset name
        this.dob = null;
        this.billCountryInfo = [];
        this.billStateNames = [];
        this.billStateInfo = [];
        this.shipStateInfo = [];
        this.billCityInfo = [];
        this.shipCityInfo = [];
        this.billingAddress = {
            billCountry: '',
            billState: '',
            billCity: ''
        };
        this.shippingAddress = {};
        this.isComponentReady = false;
        this.selectedFile = null;
        this.uploadPic = null;
    }
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        //  this.getProfilePicture();
        this.getCountries();
    };
    ProfileDetailsComponent.prototype.setShippingAddress = function () {
        if (this.usermodel.addresses && this.usermodel.addresses.length > 0 && !this.usermodel.sameShippingAddress) {
            this.usermodel.shippingAddress = this.usermodel.addresses ? this.usermodel.addresses.filter(function (address) { return address.shippingAddress === true; })[0] : undefined;
            this.onChangeShipCountry(this.usermodel.shippingAddress.country);
            this.onChangeShipState(this.usermodel.shippingAddress.state);
        }
        else {
            this.usermodel.shippingAddress = new _models_address_model__WEBPACK_IMPORTED_MODULE_4__["Address"](undefined, '', '', '', '', '', '', '', '', '', this.usermodel.id, false, true);
        }
    };
    ProfileDetailsComponent.prototype.setBillingAddress = function () {
        if (this.usermodel.addresses && this.usermodel.addresses.length > 0) {
            this.usermodel.billingAddress = this.usermodel.addresses ? this.usermodel.addresses.filter(function (address) { return address.billingAddress === true; })[0] : undefined;
            this.onBillingChangeCountry(this.usermodel.billingAddress.country);
            this.onBillingChangeState(this.usermodel.billingAddress.state);
            this.usermodel.sameShippingAddress = this.usermodel.billingAddress.shippingAddress === true;
        }
        else {
            this.usermodel.billingAddress = new _models_address_model__WEBPACK_IMPORTED_MODULE_4__["Address"](undefined, '', '', '', '', '', '', '', '', '', this.usermodel.id, false, true);
        }
    };
    // getProfilePicture(): Observable<any> {
    //   const path = 'https://res.cloudinary.com/dynyihryy/image/list/samples.json';
    //   return this.http.get(path).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError), );
    // }
    ProfileDetailsComponent.prototype.uploadPicture = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fd = new FormData();
        fd.append('folder', 'profile');
        fd.append('file', this.selectedFile);
        fd.append('upload_preset', this.presetName);
        this.profileService.saveProfileOnCdn(fd)
            .subscribe(function (res) {
            var body = res;
            _this.uploadPic = body['secure_url'];
            //  console.log(this.uploadPic);
        });
    };
    ProfileDetailsComponent.prototype.extractData = function (res) {
        var body = res;
        console.log(body);
        return body || {};
    };
    ProfileDetailsComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    };
    ProfileDetailsComponent.prototype.getCountries = function () {
        var _this = this;
        this.countries.allCountries().subscribe(function (data) {
            console.log(data);
            _this.billCountryInfo = data;
            _this.profileService.getUserDetails().subscribe(function (response) {
                _this.usermodel = response.data;
                _this.usermodel.dob = new Date(_this.usermodel.dob);
                _this.setBillingAddress();
                _this.setShippingAddress();
                _this.isComponentReady = true;
            });
        }, function (err) { return console.log(err); }, function () { return console.log('complete'); });
    };
    ProfileDetailsComponent.prototype.onChangeCountry = function (countryValue) {
        for (var i = 0; i <= this.billCountryInfo.length; i++) {
            var country = this.billCountryInfo[i];
            if (country.name == countryValue) {
                return this.billCountryInfo[i].states;
            }
        }
    };
    ProfileDetailsComponent.prototype.onBillingChangeCountry = function (countryValue) {
        this.billStateInfo = this.onChangeCountry(countryValue);
    };
    ProfileDetailsComponent.prototype.onChangeShipCountry = function (countryValue) {
        this.shipStateInfo = this.onChangeCountry(countryValue);
    };
    ProfileDetailsComponent.prototype.onChangeState = function (stateValue, stateInfo) {
        var billStates = Object.entries(stateInfo);
        for (var i = 0; i <= billStates.length; i++) {
            var state = billStates[i];
            if (stateValue === state[0]) {
                return state[1];
            }
        }
    };
    ProfileDetailsComponent.prototype.onBillingChangeState = function (stateValue) {
        this.billCityInfo = this.onChangeState(stateValue, this.billStateInfo);
    };
    ProfileDetailsComponent.prototype.onChangeShipState = function (stateValue) {
        this.shipCityInfo = this.onChangeState(stateValue, this.shipStateInfo);
    };
    ProfileDetailsComponent.prototype.sameBillingShippingAddress = function () {
        this.shipStateInfo = this.billStateInfo;
        this.shipCityInfo = this.billCityInfo;
    };
    ProfileDetailsComponent.prototype.saveUserDetails = function (userDetails) {
        var _this = this;
        this.usermodel.dob = new Date(this.usermodel.dob.valueOf() - this.usermodel.dob.getTimezoneOffset() * 60000);
        console.log("The details are " + JSON.stringify(this.usermodel));
        this.setupAddressesInUserModelForSaving();
        this.profileService.deleteAddressesForUser().subscribe(function (data) {
            for (var i = 0; i < _this.usermodel.addresses.length; i++) {
                _this.profileService.saveAddress(_this.usermodel.addresses[i]).subscribe(function (data) {
                });
            }
        });
        this.profileService.saveUserDetails(this.usermodel).subscribe(function (data) {
        }, function (err) { return console.log(err); });
    };
    ProfileDetailsComponent.prototype.setupAddressesInUserModelForSaving = function () {
        this.usermodel.addresses = [];
        this.usermodel.billingAddress.id = undefined;
        this.usermodel.billingAddress.billingAddress = true;
        this.usermodel.billingAddress.shippingAddress = this.usermodel.sameShippingAddress;
        this.usermodel.addresses.push(this.usermodel.billingAddress);
        if (!this.usermodel.sameShippingAddress) {
            this.usermodel.shippingAddress.id = undefined;
            this.usermodel.shippingAddress.billingAddress = false;
            this.usermodel.shippingAddress.shippingAddress = true;
            this.usermodel.addresses.push(this.usermodel.shippingAddress);
        }
    };
    ProfileDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profiledetails',
            template: __webpack_require__(/*! ./profiledetails.component.html */ "./src/app/profiledetails/profiledetails.component.html"),
            styles: [__webpack_require__(/*! ./profiledetails.component.css */ "./src/app/profiledetails/profiledetails.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _countries_service__WEBPACK_IMPORTED_MODULE_2__["CountriesService"]])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart_quantity_input{\r\n    border: 1px solid #d7d9db !important;\r\n}"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n   <div class=\"container\">\r\n      <div class=\"row\">\r\n         <div class=\"gap-60\"></div>\r\n         <div class=\"col-md-8 col-xs-12\">\r\n            <div class=\"table_block table-responsive mb-40\" id=\"order-detail-content\">\r\n               <table class=\"table table-bordered\" id=\"cart_summary\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th colspan=\"2\" class=\"cart_product first_item\">Product name</th>\r\n                        <th class=\"cart_unit item\">Price</th>\r\n                        <th class=\"cart_quantity item\">QUANTITY</th>\r\n                        <th class=\"cart_delete last_item\">SUBTOTAL</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tfoot class=\"dd-list-empty\"><tr><td colspan=\"5\" *ngIf=\"!cartData\">There is no product in it!</td></tr></tfoot>\r\n                  <tbody class=\"dropdown-product-list\">\r\n\r\n                     <tr class=\"cart_item dd-product-group\" *ngFor=\"let product of cartData\">\r\n                        <!-- <app-cart-product [product]=product></app-cart-product> -->\r\n                        <td class=\"cart_product\">\r\n                              <a [routerLink]=\"['/product-detail', product?.id]\">\r\n                                 <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                              </a>\r\n                           </td>\r\n                           <td class=\"cart_description\">\r\n                              <p class=\"product-name\">\r\n                                 <a href=\"product-page.html\">{{product?.productName}}</a>\r\n                              </p>\r\n                              <!-- <small>Size: <span>{{}}</span></small> -->\r\n                              <small>Color: <span>{{product?.color}}</span></small>\r\n                              <small>Product Code: <span>{{product?.productCode}}</span></small>\r\n                           </td>\r\n                           <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                              <span class=\"price\">${{product?.price}}</span>\r\n                           </td>\r\n                        \r\n                           <td class=\"cart_quantity text-center\">\r\n                              <div class=\"cart_quantity_button clrfix\">\r\n                                 <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                                 <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                                 <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                              </div>\r\n                           </td>\r\n                           <td class=\"subtotal text-center\" data-title=\"SUBTOTAL\">\r\n                              <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                              <p>$ {{product?.price}}</p>\r\n                           </td>\r\n                     </tr>\r\n                     <!-- <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                        <td class=\"cart_product\">\r\n                           <a href=\"product-page.html\">\r\n                              <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                           </a>\r\n                        </td>\r\n                        <td class=\"cart_description\">\r\n                           <p class=\"product-name\">\r\n                              <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                           </p>\r\n                           <small>Size: <span>XL</span></small>\r\n                           <small>Color: <span>Red</span></small>\r\n                           <small>Product Code: <span>12658472</span></small>\r\n                        </td>\r\n                        <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                           <span class=\"price\">$800.00</span>\r\n                        </td>\r\n\r\n                        <td class=\"cart_quantity text-center\">\r\n                           <div class=\"cart_quantity_button clrfix\">\r\n                              <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                              <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                              <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                           </div>\r\n                        </td>\r\n                        <td class=\"subtotal text-center\" data-title=\"SUBTOTAL\">\r\n                           <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           <p>$ 800.00</p>\r\n                        </td>\r\n                     </tr>\r\n\r\n                     <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                        <td class=\"cart_product\">\r\n                           <a href=\"product-page.html\">\r\n                              <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-2.jpg\">\r\n                           </a>\r\n                        </td>\r\n                        <td class=\"cart_description\">\r\n                           <p class=\"product-name\">\r\n                              <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                           </p>\r\n                           <small>Size: <span>XL</span></small>\r\n                           <small>Color: <span>Red</span></small>\r\n                           <small>Product Code: <span>12658472</span></small>\r\n                        </td>\r\n                        <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                           <span class=\"price\">$800.00</span>\r\n                        </td>\r\n\r\n                        <td class=\"cart_quantity text-center\">\r\n                           <div class=\"cart_quantity_button clrfix\">\r\n                              <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                              <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                              <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                           </div>\r\n                        </td>\r\n                        <td class=\"subtotal text-center\" data-title=\"SUBTOTAL\">\r\n                           <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           <p>$ 800.00</p>\r\n                        </td>\r\n                     </tr>\r\n                     <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                        <td class=\"cart_product\">\r\n                           <a href=\"product-page.html\">\r\n                              <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-3.jpg\">\r\n                           </a>\r\n                        </td>\r\n                        <td class=\"cart_description\">\r\n                           <p class=\"product-name\">\r\n                              <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                           </p>\r\n                           <small>Size: <span>XL</span></small>\r\n                           <small>Color: <span>Red</span></small>\r\n                           <small>Product Code: <span>12658472</span></small>\r\n                        </td>\r\n                        <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                           <span class=\"price\">$800.00</span>\r\n                        </td>\r\n\r\n                        <td class=\"cart_quantity text-center\">\r\n                           <div class=\"cart_quantity_button clrfix\">\r\n                              <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                              <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                              <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                           </div>\r\n                        </td>\r\n                        <td class=\"subtotal text-center\" data-title=\"SUBTOTAL\">\r\n                           <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           <p>$ 800.00</p>\r\n                        </td>\r\n                     </tr>\r\n                     <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                        <td class=\"cart_product\">\r\n                           <a href=\"product-page.html\">\r\n                              <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-4.jpg\">\r\n                           </a>\r\n                        </td>\r\n                        <td class=\"cart_description\">\r\n                           <p class=\"product-name\">\r\n                              <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                           </p>\r\n                           <small>Size: <span>XL</span></small>\r\n                           <small>Color: <span>Red</span></small>\r\n                           <small>Product Code: <span>12658472</span></small>\r\n                        </td>\r\n                        <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                           <span class=\"price\">$800.00</span>\r\n                        </td>\r\n\r\n                        <td class=\"cart_quantity text-center\">\r\n                           <div class=\"cart_quantity_button clrfix\">\r\n                              <button title=\"Subtract\" (click)=\"reduceCount(quantity)\" class=\"cart_quantity_input form-control grey btn-minus\" rel=\"nofollow\">-</button>\r\n                              <input type=\"text\" [(ngModel)]=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                              <button title=\"Add\" (click)=\"addCount(quantity)\" class=\"cart_quantity_input form-control grey cart-plus\" rel=\"nofollow\">+</button>\r\n                           </div>\r\n                        </td>\r\n                        <td class=\"subtotal text-center\" data-title=\"SUBTOTAL\">\r\n                           <a class=\"close-btn ddr\" href=\"#\"><i class=\"icon_close\"></i></a>\r\n                           <p>$ 800.00</p>\r\n                        </td>\r\n                     </tr> -->\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-4 col-xs-12 pull-right\">\r\n            <div class=\"row\">\r\n               <div class=\"container col-xs-12 cart-detail\">\r\n                  <h6 class=\"gold-header\">CART DETAIL</h6>\r\n                  <p class=\"info\"><span class=\"pull-left col-xs-6\">Cart Subtotal:</span><span class=\"pull-right col-xs-6 text-right\">$2100.00</span></p>\r\n                  <p class=\"info\"><span class=\"pull-left col-xs-6\">Shipping:</span><span class=\"pull-right col-xs-6 text-right gray\">Free Shipping</span></p>\r\n                  <p class=\"info total\"><span class=\"pull-left col-xs-6\">ORDER TOTAL:</span><span class=\"col-xs-6 pull-right text-right\">$2100.00</span></p>\r\n               </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-xs-12\"><h6 class=\"gold-header\">CALCULATE SHIPPING</h6></div>\r\n               <div class=\"container col-xs-12\">\r\n                  <div class=\"calc-shipping clearfix\">\r\n                     <div class=\"required form-group col-xs-12\">\r\n                        <select class=\"form-control s-styled hasCustomSelect\" name=\"shipping_country\">\r\n                           <option selected hidden>Country</option>\r\n                           <option value=\"1\">01</option>\r\n                           <option value=\"2\">02</option>\r\n                           <option value=\"3\">03</option>\r\n                           <option value=\"4\">04</option>\r\n                           <option value=\"5\">05</option>\r\n                           <option value=\"6\">06</option>\r\n                           <option value=\"7\">07</option>\r\n                           <option value=\"8\">08</option>\r\n                           <option value=\"9\">09</option>\r\n                           <option value=\"10\">10</option>\r\n                           <option value=\"11\">11</option>\r\n                           <option value=\"12\">12</option>\r\n                           <option value=\"13\">13</option>\r\n                           <option value=\"14\">14</option>\r\n                           <option value=\"15\">15</option>\r\n                           <option value=\"16\">16</option>\r\n                           <option value=\"17\">17</option>\r\n                           <option value=\"18\">18</option>\r\n                           <option value=\"19\">19</option>\r\n                           <option value=\"20\">20</option>\r\n                           <option value=\"21\">21</option>\r\n                           <option value=\"22\">22</option>\r\n                           <option value=\"23\">23</option>\r\n                           <option value=\"24\">24</option>\r\n                           <option value=\"25\">25</option>\r\n                           <option value=\"26\">26</option>\r\n                           <option value=\"27\">27</option>\r\n                           <option value=\"28\">28</option>\r\n                           <option value=\"29\">29</option>\r\n                           <option value=\"30\">30</option>\r\n                           <option value=\"31\">31</option>\r\n                        </select>\r\n                     </div>\r\n                     <div class=\"required form-group col-xs-12\">\r\n                        <select class=\"form-control s-styled hasCustomSelect\" name=\"shipping_state\">\r\n                           <option selected hidden>Select state</option>\r\n                           <option value=\"1\">01</option>\r\n                           <option value=\"2\">02</option>\r\n                           <option value=\"3\">03</option>\r\n                           <option value=\"4\">04</option>\r\n                           <option value=\"5\">05</option>\r\n                           <option value=\"6\">06</option>\r\n                           <option value=\"7\">07</option>\r\n                           <option value=\"8\">08</option>\r\n                           <option value=\"9\">09</option>\r\n                           <option value=\"10\">10</option>\r\n                           <option value=\"11\">11</option>\r\n                           <option value=\"12\">12</option>\r\n                           <option value=\"13\">13</option>\r\n                           <option value=\"14\">14</option>\r\n                           <option value=\"15\">15</option>\r\n                           <option value=\"16\">16</option>\r\n                           <option value=\"17\">17</option>\r\n                           <option value=\"18\">18</option>\r\n                           <option value=\"19\">19</option>\r\n                           <option value=\"20\">20</option>\r\n                           <option value=\"21\">21</option>\r\n                           <option value=\"22\">22</option>\r\n                           <option value=\"23\">23</option>\r\n                           <option value=\"24\">24</option>\r\n                           <option value=\"25\">25</option>\r\n                           <option value=\"26\">26</option>\r\n                           <option value=\"27\">27</option>\r\n                           <option value=\"28\">28</option>\r\n                           <option value=\"29\">29</option>\r\n                           <option value=\"30\">30</option>\r\n                           <option value=\"31\">31</option>\r\n                        </select>\r\n                     </div>\r\n                     <div class=\"required form-group col-xs-12\">\r\n                        <select class=\"form-control s-styled hasCustomSelect\" name=\"shipping_zip_code\">\r\n                           <option selected hidden>Postal zip code</option>\r\n                           <option value=\"1\">01</option>\r\n                           <option value=\"2\">02</option>\r\n                           <option value=\"3\">03</option>\r\n                           <option value=\"4\">04</option>\r\n                           <option value=\"5\">05</option>\r\n                           <option value=\"6\">06</option>\r\n                           <option value=\"7\">07</option>\r\n                           <option value=\"8\">08</option>\r\n                           <option value=\"9\">09</option>\r\n                           <option value=\"10\">10</option>\r\n                           <option value=\"11\">11</option>\r\n                           <option value=\"12\">12</option>\r\n                           <option value=\"13\">13</option>\r\n                           <option value=\"14\">14</option>\r\n                           <option value=\"15\">15</option>\r\n                           <option value=\"16\">16</option>\r\n                           <option value=\"17\">17</option>\r\n                           <option value=\"18\">18</option>\r\n                           <option value=\"19\">19</option>\r\n                           <option value=\"20\">20</option>\r\n                           <option value=\"21\">21</option>\r\n                           <option value=\"22\">22</option>\r\n                           <option value=\"23\">23</option>\r\n                           <option value=\"24\">24</option>\r\n                           <option value=\"25\">25</option>\r\n                           <option value=\"26\">26</option>\r\n                           <option value=\"27\">27</option>\r\n                           <option value=\"28\">28</option>\r\n                           <option value=\"29\">29</option>\r\n                           <option value=\"30\">30</option>\r\n                           <option value=\"31\">31</option>\r\n                        </select>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-8 col-xs-12\">\r\n            <div class=\"row\">\r\n               <form action=\"#\"  class=\"form-inline bottom-buttons\">\r\n                  <div class=\"col-lg-6 col-xs-12\">\r\n                     <div class=\"row\">\r\n                        <div class=\"form-group col-xs-7 col-sm-8\">\r\n                           <input type=\"text\" name=\"coupon\" placeholder=\"Enter coupon\" class=\"form-control placeholder-fix\">\r\n                        </div>\r\n                        <div class=\"col-xs-5 col-sm-4\">\r\n                           <button class=\"btn btn-md btn-third-col\">APPLY</button>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-xs-12\">\r\n                     <div class=\"row\">\r\n                        <div class=\"col-sm-5 col-xs-12\">\r\n                           <button class=\"btn btn-md btn-third-col\" (click)=\"updateCart(product)\">UPDATE CART</button>\r\n                        </div>\r\n                        <div class=\"col-sm-7 col-xs-12\">\r\n                           <a [routerLink]=\"['/checkout']\" class=\"btn btn-md btn-third-col btn-w100\" >PROCEED TO CHECKOUT</a>\r\n                           <!-- <button class=\"btn btn-md btn-sec-col\">PROCEED TO CHECKOUT</button> -->\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n\r\n         <div class=\"gap-70 col-xs-12\"></div>\r\n      </div>\r\n   </div>\r\n</div> <!-- pg-body -->"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
        this.quantity = 1;
        this.cartData = {};
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    ShoppingCartComponent.prototype.getCart = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (data) {
            _this.cartData = data;
            console.log(JSON.stringify(_this.cartData));
        }, function (err) { return console.log(err); }, function () { return console.log('complete'); });
    };
    ShoppingCartComponent.prototype.addCount = function (value) {
        //  var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        this.quantity = val + 1;
        // $count.val(val+1);
        return false;
    };
    ShoppingCartComponent.prototype.reduceCount = function (value) {
        //   var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        if (val > 0)
            this.quantity = val - 1;
        return false;
    };
    ShoppingCartComponent.prototype.updateCart = function (product) {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/toast.service.ts":
/*!**********************************!*\
  !*** ./src/app/toast.service.ts ***!
  \**********************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService() {
        this.messenger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ToastService.prototype.getMessenger = function () {
        return this.messenger.asObservable();
    };
    ToastService.prototype.showGenericBackendError = function () {
        this.messenger.next({ severity: 'error', summary: "Some error occured",
            detail: "Failed to perform operation due to system failure. Please try again." });
    };
    ToastService.prototype.showSuccess = function (title, text) {
        this.messenger.next({ severity: 'success', summary: title, detail: text });
    };
    ToastService.prototype.showInfo = function (title, text) {
        this.messenger.next({ severity: 'info', summary: title, detail: text });
    };
    ToastService.prototype.showWarn = function (title, text) {
        this.messenger.next({ severity: 'warn', summary: title, detail: text });
    };
    ToastService.prototype.showError = function (title, text) {
        this.messenger.next({ severity: 'error', summary: title, detail: text });
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
        //TODO To come from environemnt
        this.baseUrl = 'http://localhost:8082/';
    }
    WishlistService.prototype.getWishlist = function () {
        return this.http.get("http://localhost:8084/cart/1");
        //    return this.http.get(this.baseUrl+"cart/");
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pg-body\">\r\n    <div class=\"container\">\r\n     \r\n       <div class=\"row\">\r\n         \r\n          <div class=\"col-md-10 col-sm-12 col-xs-12\">\r\n             <h6 class=\"account-table-head\">YOUR WISHLIST</h6>\r\n\r\n             <div class=\"table_block table-responsive\" id=\"order-detail-content\">\r\n                <table class=\"table table-bordered\" id=\"cart_summary\">\r\n                   <thead>\r\n                      <tr>\r\n                         <th colspan=\"2\" class=\"cart_product first_item\">Product name</th>\r\n                         <th class=\"cart_unit item\">Price</th>\r\n                         <th class=\"cart_quantity item\">QUANTITY</th>\r\n                         <th class=\"cart_delete last_item\">ACTION</th>\r\n                      </tr>\r\n                   </thead>\r\n                   <tfoot class=\"dd-list-empty\"><tr><td>There is no product in wishlist!</td></tr></tfoot>\r\n                   <tbody class=\"dropdown-product-list\">\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-1.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td>\r\n\r\n                         <td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                                 <button title=\"Subtract\" (click)=\"reduceCount(quantity)\" class=\"cart_quantity_input form-control grey btn-minus\" rel=\"nofollow\">-</button>\r\n                                 <input type=\"text\" [(ngModel)]=\"quantity\" disabled=\"\" size=\"2\" autocomplete=\"off\" class=\"cart_quantity_input form-control grey count\" value=\"1\" name=\"quantity\">\r\n                                 <button title=\"Add\" (click)=\"addCount(quantity)\" href=\"#\" class=\"cart_quantity_input form-control grey cart-plus\" rel=\"nofollow\">+</button>\r\n                            </div>\r\n                         </td>\r\n                         <td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <button title=\"Buy\" (click)=\"addCart(product)\" class=\"btn btn-sec-col\">ADD TO CART</button><br>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"btn remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-2.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td>\r\n\r\n                         <td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td>\r\n                         <td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"#\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"btn remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-3.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td>\r\n\r\n                         <td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td>\r\n                         <td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"#\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"btn remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                      <tr class=\"cart_item first_item address_0 odd dd-product-group\">\r\n                         <td class=\"cart_product\">\r\n                            <a href=\"product-page.html\">\r\n                               <img alt=\"Faded Short Sleeve T-shirts\" src=\"images/prd-4.jpg\">\r\n                            </a>\r\n                         </td>\r\n                         <td class=\"cart_description\">\r\n                            <p class=\"product-name\">\r\n                               <a href=\"product-page.html\">Majestic Beecroft Sweater For Him</a>\r\n                            </p>\r\n                            <small>Size: <span>XL</span></small>\r\n                            <small>Color: <span>Red</span></small>\r\n                            <small>Product Code: <span>12658472</span></small>\r\n                         </td>\r\n                         <td data-title=\"PRICE\" class=\"cart_unit\">\r\n                            <span class=\"price\">$800.00</span>\r\n                         </td>\r\n\r\n                         <td class=\"cart_quantity text-center\">\r\n                            <div class=\"cart_quantity_button clrfix\">\r\n                               <a title=\"Subtract\" href=\"#\" class=\"cart_quantity_down btn btn-default btn-minus\" rel=\"nofollow\">-</a>\r\n                               <input type=\"text\" name=\"quantity\" value=\"1\" class=\"cart_quantity_input form-control grey count\" autocomplete=\"off\" size=\"2\" disabled>\r\n                               <a title=\"Add\" href=\"#\" class=\"cart_quantity_up btn btn-default btn-plus\" rel=\"nofollow\">+</a>\r\n                            </div>\r\n                         </td>\r\n                         <td class=\"cart_delete text-center\">\r\n                            <div>\r\n                               <a href=\"#\" title=\"Buy\" class=\"btn btn-sec-col\">ADD TO CART</a><br>\r\n                               <a href=\"#\" title=\"Remove\" rel=\"nofollow\" class=\"btn remove ddr\"><i class=\"icon_close\"></i> Remove</a>\r\n                            </div>\r\n                         </td>\r\n                      </tr>\r\n                   </tbody>\r\n                </table>\r\n             </div>\r\n          </div>   \r\n       </div>\r\n    </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(wishlistService, productService) {
        this.wishlistService = wishlistService;
        this.productService = productService;
        this.wishData = {};
        this.quantity = 1;
        this.cartProduct = {
            "orderItemId": "",
            "orderId": "",
            "productId": "",
            "variantId": "",
            "quantity": "",
            "price": ""
        };
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.getWishlist();
    };
    WishlistComponent.prototype.getWishlist = function () {
        var _this = this;
        this.wishlistService.getWishlist().subscribe(function (data) {
            _this.wishData = data;
            console.log('wish obj: ' + JSON.stringify(_this.wishData));
        }, function (err) { return console.log(err); }, function () { return console.log('complete'); });
    };
    WishlistComponent.prototype.addCount = function (value) {
        //  var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        this.quantity = val + 1;
        // $count.val(val+1);
        return false;
    };
    WishlistComponent.prototype.reduceCount = function (value) {
        //   var $count = $(this).parent().find('.count');
        var val = parseInt(value, 10);
        if (val > 0)
            this.quantity = val - 1;
        return false;
    };
    WishlistComponent.prototype.addCart = function (product) {
        this.cartProduct.orderItemId = product.orderItemId;
        this.cartProduct.orderId = product.orderId;
        this.cartProduct.productId = product.id;
        this.cartProduct.variantId = product.variantId;
        this.cartProduct.quantity = product.quantity;
        this.cartProduct.price = product.price;
        product.quantity = this.quantity;
        this.productService.addItemtoCart(this.cartProduct).subscribe(function (data) {
            if (data) {
                alert("success " + data);
            }
            else {
                alert("failed");
            }
        }, function (err) { return console.log(err); });
        console.log(JSON.stringify(product));
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"], _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    httpPrefix: 'http://localhost:8080',
    inventoryUrl: '/inventory/product/',
    categoryUrl: '/inventory/category/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nagpEcom\mcart-nagp\amcart-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map