import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';
import { addHotel, addRoom, deleteRoom, editRoom } from '../store/room.actions';
import { State } from '../store/room.reducer';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  hotels: Hotel[];

  constructor(private store: Store<{ rooms: State }>) {
    this.store.select(state => state.rooms.hotels).subscribe(hotels => this.hotels = hotels)
  }

  getOrAddHotel(name: string): Hotel {
    let hotel = this.hotels.find(item => item.name === name);
    if (!hotel) {
      hotel = new Hotel(name);
      this.store.dispatch(addHotel({ hotel: hotel }));
    }
    return hotel;
  }

  addRoom(room: Room): void {
    this.store.dispatch(addRoom({ room: room }));
  }

  changeRoom(original: Room, changed: Room): void {
    this.store.dispatch(editRoom({ original: original, changed: changed }));
  }

  deleteRoom(room: Room): void {
    this.store.dispatch(deleteRoom({ room: room }));
  }

  getRoomPrice(room: Room, numberOfNights: number): number {
    return (numberOfNights > 0) ? room.price * numberOfNights : 0;
  }
}
