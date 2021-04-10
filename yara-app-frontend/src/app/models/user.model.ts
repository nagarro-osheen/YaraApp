import { Address } from "./address.model";

export class User {
    constructor(public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public image: string,
        public userId: string,
        public dob: Date,
        public title: string,
        public sameShippingAddress: Boolean,
        public billingAddress: Address,
        public shippingAddress: Address,
        public addresses: Address[]) { }
}