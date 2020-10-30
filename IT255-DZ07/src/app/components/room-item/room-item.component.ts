import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'met-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room: Room;
  @Output() edit = new EventEmitter<Room>();
  @Output() delete = new EventEmitter<Room>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit(this.room);
  }

  onDelete(): void {
    this.delete.emit(this.room);
  }
}
