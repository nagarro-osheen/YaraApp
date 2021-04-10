import { Address } from "./address.model";
import { PaymentMethod } from "./payment-method.model";
import { OrderItem } from "./order-item.model";

export class Order {
    constructor(public orderId?: number,
        public sameShippingAddress?: Boolean,
        public notes?: string,
        public billingAddress?: Address,
        public shippingAddress?: Address,
        public addresses?: Address[],
        public paymentMethod?: PaymentMethod,
        public userId?: number,
        public orderItems?: OrderItem[]) { }
}