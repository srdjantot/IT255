import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  hotels: Hotel[] = [
    new Hotel('Hotel Star'),
    new Hotel('Hotel Palas'),
  ];

  rooms: Room[] = [
    new Room(this.hotels[0], "Jednokrevetna soba s pogledom na more", 120, 4),
    new Room(this.hotels[0], "Dvokrevetna soba s pogledom na more", 180, 5),
    new Room(this.hotels[1], "Jednokrevetna soba\nPolupansion ", 140, 2),
    new Room(this.hotels[1], "Jednokrevetna soba\nDoručak", 90, 3),
  ];

  constructor() { }

  getOrAddHotel(name: string): Hotel {
    let hotel = this.hotels.find(item => item.name === name);
    if (!hotel) {
      hotel = new Hotel(name);
      this.hotels = this.hotels.concat(hotel);
    }
    return hotel;
  }

  addRoom(room: Room): void {
    this.rooms = this.rooms.concat(room);
  }

  changeRoom(): void {
    this.rooms = this.rooms.concat();
  }

  removeRoom(room: Room): void {
    this.rooms = this.rooms.filter(item => item !== room);
  }

  getRoomPrice(room: Room, numberOfNights: number): number {
    return (numberOfNights > 0) ? room.price * numberOfNights : 0;
  }
}
