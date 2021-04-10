import { Component, Input } from "@angular/core";
import { Address } from "src/app/models/address.model";

@Component({
    selector: 'order-view-address',
    templateUrl: './order-view-address.component.html'
})
export class OrderViewAddressComponent {

    @Input() address: Address = Address.init();

}