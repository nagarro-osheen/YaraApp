import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { CountriesService } from './countries.service';
import { ProfileService } from './profile.service';
import { InventoryComponent } from './inventory/inventory.component';
import { ProfileDetailsComponent } from './profiledetails/profiledetails.component';
import {TableModule} from 'primeng/table';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule }   from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CompareComponent } from './compare/compare.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginService } from './login.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { CartService } from "./cart.service";
import { PhotoService } from './photo.service';
import { NgxUILoaderModule } from './ngx-ui-loader.module';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';
import { WishlistService } from "./wishlist.service";
import { ProductReviewComponent } from './product-review/product-review.component';
import { RegionSelectorComponent } from './region-selector/region-selector.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { BillingShippingAddressComponent } from './billing-shipping-address/billing-shipping-address.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { CartProductsInfoComponent } from './cart-products-info/cart-products-info.component';
import { initializer } from './app-init.service';
import { AppAuthGuard } from './utils/auth.guard';
import { KeysPipe } from './keys.pipe';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentMethodService } from './payment-method.service';
import { CheckoutUpdatedCartDialogComponent } from './checkout/checkout-updated-cart-dialog/checkout-updated-cart-dialog.component';
import { CheckoutUpdatedCartProductsInfoComponent } from './checkout/checkout-updated-cart-product-info/checkout-updated-cart-products-info.component';
import { CheckoutUpdatedOrderDialogComponent } from './checkout/checkout-updated-order-dialog/checkout-updated-order-dialog.component';
import { OrderService } from './order.service';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { OrderProductsSummaryComponent } from './order-products-summary/order-products-summary.component';
import { AddressService } from './address.service';
import { OrderViewAddressComponent } from './order-completed/order-view-address/order-view-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    InventoryComponent,
    ProfileDetailsComponent,
    ProductListComponent,
    CategoryListComponent,
    AddEditProductComponent,
    CheckoutComponent,
    ContactPageComponent,
    WishlistComponent,
    OrderHistoryComponent,
    CompareComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    AddEditCategoryComponent,
    ProductReviewComponent,
    RegionSelectorComponent,
    UserAddressComponent,
    BillingShippingAddressComponent,
    CartProductsInfoComponent,
    PaymentMethodComponent,
    KeysPipe,
    ProductPricePipe,
    CheckoutUpdatedCartDialogComponent,
    CheckoutUpdatedCartProductsInfoComponent,
    CheckoutUpdatedOrderDialogComponent,
    OrderCompletedComponent,
    OrderProductsSummaryComponent,
    OrderViewAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ToastModule,
    PaginatorModule,
    BrowserAnimationsModule,
    NgxUILoaderModule,
    NgxPaginationModule,
    JwSocialButtonsModule,
    KeycloakAngularModule,
    DialogModule
  ],
  providers: [CountriesService,ProfileService,LoginService,MessageService,ToastService,CartService,PhotoService,WishlistService,
    PaymentMethodService, OrderService, AddressService
    ,{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  },
    AppAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
