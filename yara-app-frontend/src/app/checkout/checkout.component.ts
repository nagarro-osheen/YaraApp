import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { Address } from '../models/address.model';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart.model';
import { ProductService } from '../product.service';
import { OrderItem } from '../models/order-item.model';
import { InventoryProduct } from '../models/inventory-product.model';
import { OrderSteps } from './order-steps';
import { PaymentMethod } from '../models/payment-method.model';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  isUserLoggedIn: Boolean = false;
  order: Order = new Order();
  isComponentReady: Boolean = false;
  orderItemsReady: Boolean = false;
  areAddressesValid: Boolean = false;
  showBillingInformation: Boolean = false;
  cart: Cart = new Cart();
  cartProductsMap: Map<string, OrderItem> = new Map();
  inventoryProductsMap: Map<string, InventoryProduct> = new Map();
  orderItemsUpdated: Boolean = false;
  orderItemsDeleted: Boolean = false;
  cartSubTotal: number = 0;
  orderSteps = OrderSteps;
  currentStep: string = OrderSteps.register;
  paymentMethodValid: Boolean = false;
  showInfoDialog: Boolean = false;
  areOrderItemsChanged: Boolean = false;
  orderItemsToBeUpdated: OrderItem[] = [];
  orderItemsToBeDeleted: OrderItem[] = [];
  keysToBeRemoved: string[] = [];

  constructor(private loginService: LoginService,
    private profileService: ProfileService,
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private addressService: AddressService) { }

  ngOnInit() {
    this.checkIfUserIsLoggedIn();
    this.getUserDetails();
    this.getCartDetails();
  }

  getCartDetails() {
    this.cartService.getCartForUser().subscribe(response => {
      this.cart = response.data;
      this.populateCartProductsMap();
      this.getProductsFromInventory();
    });
  }

  populateCartProductsMap(): void {
    this.cart.orderItems.forEach(orderItem => {
      this.cartProductsMap.set(orderItem.productId + '_' + orderItem.variantId, orderItem);
    });
  }

  getProductsFromInventory(functionToBeCalled?: Function): void {
    let productIds: string[] = [];
    this.cart.orderItems.forEach(orderItem => {
      productIds.push(orderItem.productId);
    });
    this.productService.getProductsByIds(productIds).subscribe(response => {
      this.populateInventoryProductsMap(response.data);
      this.updateCartWithAvailableQuantity(functionToBeCalled);
    });
  }

  checkIfOrderItemToBeUpdatedOrDeleted(value: OrderItem, variant: any, key: string): void {
    if ((value.quantity > variant.quantity || value.price !== variant.price) && variant.quantity !== 0) {
      value.price = variant.price;
      value.quantity = Math.min(variant.quantity, value.quantity);
      this.orderItemsToBeUpdated.push(value);
    } else if (variant.quantity === 0) {
      this.orderItemsToBeDeleted.push(value);
      this.keysToBeRemoved.push(key);
    }
  }

  updateCartWithAvailableQuantity(functionToBeCalled: Function): void {
    this.orderItemsToBeDeleted = [];
    this.orderItemsToBeUpdated = [];
    this.orderItemsDeleted = false;
    this.orderItemsUpdated = false;
    this.areOrderItemsChanged = false;
    this.keysToBeRemoved = [];
    this.cartProductsMap.forEach((value: OrderItem, key: string) => {
      let variant: any = this.inventoryProductsMap.get(key);
      this.checkIfOrderItemToBeUpdatedOrDeleted(value, variant, key);
    });
    this.updateCart();
    if(functionToBeCalled && this.orderItemsToBeUpdated.length === 0 && this.orderItemsToBeDeleted.length === 0) {
      functionToBeCalled();
    }
  }
  orderItemsToBeChanged(): any {
    throw new Error("Method not implemented.");
  }

  placeFinalOrder() {
    this.prepareOrderModel();
    this.orderService.placeOrder(this.order).subscribe(response => {
      this.router.navigate(['/ordercompleted', response.data.orderId]);
    });
  }
  prepareOrderModel(): void {
    this.order.addresses = [];
    this.order.addresses.push(this.order.billingAddress);
    if(!this.order.sameShippingAddress) {
      this.order.addresses.push(this.order.shippingAddress);
    }
    this.order.userId = this.loginService.getLoggedInUserId();
    this.order.orderItems = this.cart.orderItems;
  }

  updateCart() {
    this.deleteOrderItems();
    this.updateOrderItems();
  }

  deleteOrderItems(): any {
    if (this.orderItemsToBeDeleted.length > 0) {
      this.areOrderItemsChanged = true;
        this.cartService.removeOrderItems(this.orderItemsToBeDeleted).subscribe(response => {
          this.keysToBeRemoved.forEach(key => {
            this.cartProductsMap.delete(key);
          });
          this.performOperationsAfterItemsDeleted();
        });
    } else {
      this.performOperationsAfterItemsDeleted();
    }
  }

  performOperationsAfterItemsDeleted(): void {
    this.orderItemsDeleted = true;
    this.performOperationsAfterOrderItemsChanged();
  }

  updateCartFromCartProductsMap(functionToBeCalled?: Function): void {
    if (this.orderItemsDeleted && this.orderItemsUpdated) {
      this.cart.orderItems = [];
      this.cartProductsMap.forEach((value: OrderItem, key: string) => {
        this.cart.orderItems.push(value);
        console.log(this.cart.orderItems);
      });
      this.orderItemsReady = true;
      if (functionToBeCalled) {
        functionToBeCalled();
      }
    }
  }

  dialogClosed(): void {
    this.areOrderItemsChanged = false;
  }

  updateOrderItems(): any {
    if (this.orderItemsToBeUpdated.length > 0) {
      this.areOrderItemsChanged = true;
        this.cartService.updateOrderItems(this.orderItemsToBeUpdated, this.cart.cartId).subscribe(response => {
          this.performOperationsAfterOrderItemsUpdated();
        });
    } else {
      this.performOperationsAfterOrderItemsUpdated();
    }
  }
  performOperationsAfterOrderItemsUpdated(): void {
    this.orderItemsUpdated = true;
    this.performOperationsAfterOrderItemsChanged();

  }
  performOperationsAfterOrderItemsChanged(): void {
    this.updateCartFromCartProductsMap();

  }

  populateInventoryProductsMap(products: InventoryProduct[]): void {
    products.forEach(product => {
      for (let i = 0; i < product.variants.length; i++) {
        product.variants[i].price = product.price;
        this.inventoryProductsMap.set(product.id + '_' + i, product.variants[i]);
      }
    });
  }

  checkIfUserIsLoggedIn(): void {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      this.currentStep = OrderSteps.billingInfo;
    }
  }

  getUserDetails() {
    this.profileService.getUserDetails().subscribe(response => {
      let usermodel: User = response.data;
      this.performStepsAfterUserDetailsFetched(usermodel);
    });
  }

  performStepsAfterUserDetailsFetched(usermodel: User): any {
    this.order.addresses = usermodel.addresses;
    this.order.billingAddress = this.addressService.getBillingAddress(this.order.addresses);
    this.order.shippingAddress = this.addressService.getShippingAddress(this.order.addresses);
    if (this.order.billingAddress && this.order.shippingAddress && this.order.billingAddress.id === this.order.shippingAddress.id) {
      this.order.shippingAddress = Address.init();
      this.order.sameShippingAddress = true;
    }
    if (this.isUserLoggedIn) {
      this.showBillingInformation = true;
    }
    this.isComponentReady = true;
  }

  sameShippingAddressChanged(value: Boolean) {
    this.order.sameShippingAddress = value;
  }

  setBillingAddress(address: Address) {
    this.order.billingAddress = address;
  }

  setShippingAddress(address: Address) {
    this.order.shippingAddress = address;
  }

  setAddressesValid(valid: Boolean) {
    this.areAddressesValid = valid;
  }

  nextStep(step: string) {
    this.areOrderItemsChanged = false;
    this.currentStep = step;
  }

  updatedPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethodValid = true;
    this.order.paymentMethod = paymentMethod;
  }

  validateUser(userData) {
    console.log(JSON.stringify(userData));
  }

  placeOrder() {
    this.currentStep = OrderSteps.paymentMethod;
    this.cartProductsMap.get('5c59bf97cc8b1e54b4f50ef0_0').quantity = 40;
    this.getProductsFromInventory(this.placeFinalOrder);
  }
}
