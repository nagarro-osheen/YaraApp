export class Address {
    constructor(public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public company: string,
        public city: string,
        public state: string,
        public country: string,
        public postalCode: string,
        public addressValue: string,
        public userId: number,
        public billingAddress: Boolean,
        public shippingAddress: Boolean) { }

    static init(): Address {
       return new Address(undefined, '', '', '', '', '', '', '', '', '', '', undefined, false, true);
    }
}