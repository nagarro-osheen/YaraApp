import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { LoginService } from '../login.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  loggedInUserId: number;
  order:Order;
  totalCost: number = 0;

  constructor(private loginService: LoginService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.loggedInUserId = this.loginService.getLoggedInUserId();
    this.orderService.getRecentOrder(this.loggedInUserId).subscribe(response => {
      this.order = response.data;
      this.totalCost = this.orderService.getTotalCost(this.order.orderItems);
    });
  }

}
