import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProfileDetailsComponent } from './profiledetails/profiledetails.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CompareComponent } from './compare/compare.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { AppAuthGuard } from './utils/auth.guard';

const routes: Routes = [
    {   path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'product-detail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate:[AppAuthGuard],
        data: { roles: ['amcart_user'] },
        children: [
            {
                path: '',
                component: ProfileDetailsComponent
            },
            {
                path: 'inventory',
                component: InventoryComponent,
                canActivate:[AppAuthGuard],
                data: { roles: ['amcart_admin'] },
                children:[
                    {
                        path:'',
                        component: ProductListComponent,
                    },
                    {
                        path:'categories',
                        component: CategoryListComponent,
                    },
                    {
                        path:'addproduct',
                        component:AddEditProductComponent
                    },
                    {
                        path:'editproduct/:id',
                        component:AddEditProductComponent
                    },
                    {
                        path:'addcategory',
                        component:AddEditCategoryComponent
                    },
                    {
                        path:'editcategory/:id',
                        component:AddEditCategoryComponent
                    }
                ]
            },
            {
                path: 'wishlist',
                component: WishlistComponent
            },
            {
                path: 'order-history',
                component: OrderHistoryComponent
            }
        ]
    },
    {
        path:'checkout',
        canActivate:[AppAuthGuard],
        data: { roles: ['amcart_user'] },
        component: CheckoutComponent
    },
    {
        path:'ordercompleted/:id',
        component: OrderCompletedComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'compare',
        component: CompareComponent
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    },
    {
        path: 'review/:id',
        component: ProductReviewComponent
    }
   
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }