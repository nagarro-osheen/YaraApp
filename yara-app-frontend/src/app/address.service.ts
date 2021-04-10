import { Injectable } from "@angular/core";
import { Address } from "./models/address.model";

@Injectable()
export class AddressService {

    getBillingAddress(addresses: Address[]): Address {
        return this.getAddressFromAddresses(address => address.billingAddress === true, addresses);
    }
    
    getShippingAddress(addresses: Address[]): Address {
        return this.getAddressFromAddresses(address => address.shippingAddress === true, addresses);
    }

    getAddressFromAddresses(filterFn: any, addresses: Address[]): Address {
        let address: Address = Address.init();
        let filteredAddresses: Address[] = [];
        if (addresses.length > 0) {
          filteredAddresses = addresses.filter(filterFn);
          if (filteredAddresses.length > 0) {
            address = filteredAddresses[0];
          }
        }
        return address;
      }
}