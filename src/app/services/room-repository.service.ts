import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService {
  rooms: Room[] = [
    new Room("Hotel Star", "Jednokrevetna soba s pogledom na more", 120, 4),
    new Room("Hotel Star", "Dvokrevetna soba s pogledom na more", 180, 5),
    new Room("Hotel Palas", "Jednokrevetna soba\nPolupansion ", 140, 2),
    new Room("Hotel Palas", "Jednokrevetna soba\nDoručak", 90, 3),
  ];

  constructor() { }

  add(room: Room): void {
    this.rooms = this.rooms.concat(room);
  }

  change(): void {
    this.rooms = this.rooms.concat();
  }

  remove(room: Room): void {
    this.rooms = this.rooms.filter(item => item !== room);
  }
}
