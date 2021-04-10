import { Pipe, PipeTransform } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Pipe({name: 'productPrice'})
export class ProductPricePipe implements PipeTransform{
    transform(value: any): string | null {        
       return '$' + new DecimalPipe('en-US').transform(value,"1.2-2");
    }


}