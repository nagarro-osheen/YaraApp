import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Address } from "../models/address.model";

@Component({
    selector: 'user-address',
    templateUrl: './user-address.component.html'
})
export class UserAddressComponent {

    @Input() address: Address;

    @Output() completedAddress: EventEmitter<Address> = new EventEmitter();
    @Output() validAddress: EventEmitter<Boolean> = new EventEmitter();

    regionValid: Boolean = false;

    isRegionValid(valid: Boolean) {
        this.regionValid = valid;
    }

    setRegionAddress(regionAddress: Address) {
        this.address.city = regionAddress.city;
        this.address.country = regionAddress.country;
        this.address.state = regionAddress.state;
        this.fieldChanged();
    }

    fieldChanged() {
        this.validAddress.emit(this.isAddressValid());
        if(this.isAddressValid()) {
            this.completedAddress.emit(this.address);
        }
    }

    isAddressValid(): Boolean {
        return this.isNotEmpty(this.address.firstName) && this.isNotEmpty(this.address.lastName)
         && this.isNotEmpty(this.address.email) && 
         this.isNotEmpty(this.address.phone) && this.isNotEmpty(this.address.company) && 
         this.isNotEmpty(this.address.postalCode) && this.isNotEmpty(this.address.addressValue) && this.regionValid;
    }

    isNotEmpty(firstName: string): Boolean {
        return firstName !== undefined && firstName.length > 0;
    }
}