import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Address } from "../models/address.model";

@Component({
    selector: 'billing-shipping-address',
    templateUrl: './billing-shipping-address.component.html'
})
export class BillingShippingAddressComponent {

    isBillingAddressValid: Boolean = false;
    isShippingAddressValid: Boolean = false;

    @Input() sameShippingAddress: Boolean;
    @Input() billingAddress: Address;
    @Input() shippingAddress: Address;

    @Output() sameBillingShippingAddress: EventEmitter<Boolean> = new EventEmitter();
    @Output() completedBillingAddress: EventEmitter<Address> = new EventEmitter();
    @Output() completedShippingAddress: EventEmitter<Address> = new EventEmitter();
    @Output() addressesValid: EventEmitter<Boolean> = new EventEmitter();

    sameShippingAddressChanged() {
        this.emitAddressesValidEvent();
    }

    billingAddressValid(valid: Boolean) {
        this.isBillingAddressValid = valid;
        this.emitAddressesValidEvent();
    }
    emitAddressesValidEvent(): any {
        this.addressesValid.emit(this.checkIfAddressesValid());
        if(this.checkIfAddressesValid()) {
            this.completedShippingAddress.emit(this.shippingAddress);
            this.completedBillingAddress.emit(this.billingAddress);
        }
    }

    setBillingAddress(address: Address) {
        this.billingAddress = address;
    }

    shippingAddressValid(valid: Boolean) {
        this.isShippingAddressValid = valid;
        this.emitAddressesValidEvent();
    }

    setShippingAddress(address: Address) {
        this.shippingAddress = address;
    }

    checkIfAddressesValid(): Boolean {
        return this.isBillingAddressValid && (this.sameShippingAddress || this.isShippingAddressValid);
    }

}