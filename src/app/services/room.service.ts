import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getPrice(room: Room, numberOfNights: number): number {
    return (numberOfNights > 0) ? room.price * numberOfNights : 0;
  }
}
