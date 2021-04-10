export class PaymentMethod {
    constructor(public paymentMethodId: number,
        public displayValue: string,
        public description: string,
        public imageUrl: string) { }
}