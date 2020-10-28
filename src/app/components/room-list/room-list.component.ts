import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationFormDialog } from 'src/app/dialogs/reservation-form/reservation-form.dialog';
import { RoomFormDialog } from 'src/app/dialogs/room-form/room-form.dialog';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'met-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  maxPrice: number = null;

  constructor(private dialog: MatDialog,
    public roomService: RoomService) { }

  ngOnInit(): void {
  }

  onEdit(room: Room): void {
    this.dialog.open(RoomFormDialog, {
      data: {
        new: false,
        room: room
      }
    }).afterClosed().subscribe(room => {
      if (room) {
        this.roomService.changeRoom();
      }
    });
  }

  onDelete(room: Room): void {
    this.roomService.removeRoom(room);
  }

  onReserve(room: Room): void {
    this.dialog.open(ReservationFormDialog, {
      data: room
    });
  }

  onFilterChange(filter: number): void {
    this.maxPrice = filter;
  }
}
