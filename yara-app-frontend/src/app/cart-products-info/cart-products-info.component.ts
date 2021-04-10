import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { OrderItem } from "../models/order-item.model";
import { OrderService } from "../order.service";

@Component({
    selector: 'cart-products-info',
    templateUrl: './cart-products-info.component.html'
})
export class CartProductsInfoComponent implements OnInit {
    @Input() orderItems: OrderItem[] = [];
    @Input() allowDeleteItems: Boolean = false;
    @Output() cartTotal: EventEmitter<number> = new EventEmitter();

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.updateCartTotal();
    }
    updateCartTotal(): any {
        console.log(this.getCartTotal());
        this.cartTotal.emit(this.getCartTotal());
    }

    getCartTotal(): number {
        return this.orderService.getTotalCost(this.orderItems);
    }


}