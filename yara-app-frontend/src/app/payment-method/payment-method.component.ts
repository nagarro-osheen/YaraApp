import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PaymentMethod } from "../models/payment-method.model";
import { PaymentMethodService } from "../payment-method.service";

@Component({
    selector: 'payment-method',
    templateUrl: './payment-method.component.html'
})
export class PaymentMethodComponent implements OnInit{

    paymentMethods: PaymentMethod[] = [];
    isComponentReady: Boolean = false;
    selectedPaymentMethod: string = '';
    @Output() paymentMethod: EventEmitter<PaymentMethod> = new EventEmitter();

    constructor(private paymentMethodService: PaymentMethodService) { }

    ngOnInit() {
       this.paymentMethodService.getPaymentMethods().subscribe(response => {
            this.paymentMethods = response.data;
            this.isComponentReady = true;
        });
    }

    paymentMethodUpdated(method: PaymentMethod) {
        this.paymentMethod.emit(method);
        console.log(method);
    }
}