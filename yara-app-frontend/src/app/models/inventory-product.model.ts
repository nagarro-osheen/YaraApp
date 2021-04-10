export class InventoryProduct {
    constructor(public id: string,
        public productCode: string,
        public categoryId: any,
        public productName: string,
        public description: string,
        public price: number,
        public variants: any[]) { }
}