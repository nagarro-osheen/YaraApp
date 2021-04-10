import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amcart-frontend';

  constructor(private messageService: MessageService,
              private toastService:ToastService) { 
    this.toastService.getMessenger().subscribe(msg =>  this.messageService.add(msg));
  };

  clear() {
    this.messageService.clear();
  }

}
