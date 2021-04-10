import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { OrderItem } from "src/app/models/order-item.model";

@Component({
    selector: 'checkout-updated-cart-products-info',
    templateUrl: './checkout-updated-cart-products-info.component.html'
})
export class CheckoutUpdatedCartProductsInfoComponent {
    @Input() orderItems: OrderItem[] = [];

}