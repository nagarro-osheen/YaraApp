import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Order } from "./models/order.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OrderItem } from "./models/order-item.model";

@Injectable()
export class OrderService {

    httpPrefix = environment.httpPrefix;

    orderApi = this.httpPrefix + "/order/order/";

    constructor(private http: HttpClient) { }

    placeOrder(order: Order): Observable<any> {
        return this.http.post(this.orderApi, order);
    }

    getOrder(orderId: number): Observable<any> {
        return this.http.get(this.orderApi + orderId);
    }

    getRecentOrder(userId: number): Observable<any> {
        return this.http.get(this.orderApi + userId + '/recent/');
    }

    getTotalCost(orderItems: OrderItem[]): number {
        let itemsTotal: number = 0;
        if (orderItems) {
            orderItems.forEach(orderItem => {
                itemsTotal += orderItem.price * orderItem.quantity;
            });
        }
        return itemsTotal;
    }


}