export class OrderItem {
    constructor(public orderItemId?: number,
        public price?: number,
        public quantity?: number,
        public productId?: string,
        public color?: string,
        public productName?: string,
        public variantId?: number) { }
}