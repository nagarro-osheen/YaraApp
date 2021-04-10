import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class PaymentMethodService {

    httpPrefix: string = environment.httpPrefix; 

    paymentMethodUrl: string = '/order/paymentmethod/';

    constructor(private http: HttpClient) { }

    getPaymentMethods(): Observable<any> {
        return this.http.get(this.httpPrefix + this.paymentMethodUrl);
    }
}