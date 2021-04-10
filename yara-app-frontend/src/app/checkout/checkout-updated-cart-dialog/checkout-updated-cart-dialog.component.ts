import { Component, Input, EventEmitter, Output } from "@angular/core";
import { OrderItem } from "src/app/models/order-item.model";

@Component({
    selector: 'checkout-updated-cart-dialog',
    templateUrl: './checkout-updated-cart-dialog.component.html'

})
export class CheckoutUpdatedCartDialogComponent {

    @Input() orderItemsDeleted: OrderItem[] = [];
    @Input() orderItemsUpdated: OrderItem[] = [] ;

    @Output() dialogClosed: EventEmitter<void> = new EventEmitter();


    displayDialog: Boolean = true;

    closeDialog() {
        this.displayDialog = false;
        this.dialogClosed.emit();
    }

}