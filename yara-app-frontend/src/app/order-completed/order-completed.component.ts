import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../order.service";
import { Order } from "../models/order.model";
import { AddressService } from "../address.service";

@Component({
    selector: 'order-completed',
    templateUrl: './order-completed.component.html'
})
export class OrderCompletedComponent implements OnInit{

    orderId: number;
    order: Order = new Order();
    componentReady: Boolean = false;

    constructor(private route: ActivatedRoute,
        private orderService: OrderService,
        private addressService: AddressService) { }

    ngOnInit() {
        this.orderId = this.route.snapshot.params['id'];  
        this.orderService.getOrder(this.orderId).subscribe(response => {
            this.order = response.data;
            this.componentReady = true;
            this.order.billingAddress = this.addressService.getBillingAddress(this.order.addresses);
            this.order.shippingAddress = this.addressService.getShippingAddress(this.order.addresses);
        });

    }

}