import { Component, Input } from "@angular/core";
import { OrderItem } from "../models/order-item.model";

@Component({
    selector: 'order-products-summary',
    templateUrl: './order-products.summary.component.html'
})
export class OrderProductsSummaryComponent {
    
    @Input() orderItems: OrderItem[] = [];
    
    cartSubTotal: number;

    updateCartTotal(value: number) {
        this.cartSubTotal = value;
    }
}