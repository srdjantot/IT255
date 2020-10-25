import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room.model';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {

  transform(value: Room[], maxPrice: number): Room[] {
    if (maxPrice === null) {
      return value;
    }

    return value.filter(room => room.price <= maxPrice);
  }

}
