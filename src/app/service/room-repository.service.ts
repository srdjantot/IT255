import { Injectable } from '@angular/core';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService {
  private rooms: Room[] = [];

  constructor() {
  }

  get(): Room[] {
    return this.rooms;
  }

  add(room: Room): void {
    this.rooms.push(room);
  }

  randomize(): void {
    for (let i = this.rooms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.rooms[i], this.rooms[j]] = [this.rooms[j], this.rooms[i]];
    }
  }
}
