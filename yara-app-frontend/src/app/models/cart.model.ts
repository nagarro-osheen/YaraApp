import { OrderItem } from "./order-item.model";

export class Cart {
    constructor(public cartId?: number, 
        public orderItems?: OrderItem[]) { }
}