import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RoomRepositoryService } from '../../service/room-repository.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  @ViewChild('txtHotel') hotelInput: ElementRef;
  hotel = '';
  description = '';
  price = 0;
  stars = 1;

  constructor(private repository: RoomRepositoryService) {
  }

  ngOnInit(): void {
  }

  addRoom(): void {
    this.repository.add(new Room(this.hotel, this.description, this.price, this.stars));
    this.hotel = '';
    this.description = '';
    this.price = 0;
    this.stars = 1;
    this.hotelInput.nativeElement.focus();
  }

  shuffleRooms(): void {
    this.repository.randomize();
  }
}
