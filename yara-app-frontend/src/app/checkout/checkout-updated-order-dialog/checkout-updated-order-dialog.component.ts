import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OrderItem } from "src/app/models/order-item.model";

@Component({
    selector: 'checkout-updated-order-dialog',
    templateUrl: './checkout-updated-order-dialog.component.html'

})
export class CheckoutUpdatedOrderDialogComponent {

    @Input() orderItemsDeleted: OrderItem[] = [];
    @Input() orderItemsUpdated: OrderItem[] = [] ;

    @Output() dialogClosed: EventEmitter<void> = new EventEmitter();
    @Output() placeOrder: EventEmitter<void> = new EventEmitter();

    displayDialog: Boolean = true;

    closeDialog() {
        this.displayDialog = false;
        this.dialogClosed.emit();
    }

    closeDialogWithYes() {
        this.closeDialog();
        this.placeOrder.emit();
    }

}