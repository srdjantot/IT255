import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../model/room';

@Pipe({
  name: 'price',
  pure: false
})
export class PricePipe implements PipeTransform {

  transform(value: Room[], price: number): Room[] {
    return value.filter(room => room.price <= price);
  }

}
