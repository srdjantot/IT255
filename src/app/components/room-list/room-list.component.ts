import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReservationFormDialog } from 'src/app/dialogs/reservation-form/reservation-form.dialog';
import { RoomFormDialog } from 'src/app/dialogs/room-form/room-form.dialog';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { State } from 'src/app/store/room.reducer';

@Component({
  selector: 'met-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  maxPrice: number = null;
  rooms$: Observable<Room[]>;

  constructor(private dialog: MatDialog,
    public roomService: RoomService,
    private store: Store<{ rooms: State }>) {
    this.rooms$ = store.select(state => state.rooms.rooms);
  }

  ngOnInit(): void {
  }

  onEdit(room: Room): void {
    this.dialog.open(RoomFormDialog, {
      data: {
        new: false,
        room: { ...room }
      }
    }).afterClosed().subscribe(changed => {
      if (changed) {
        this.roomService.changeRoom(room, changed);
      }
    });
  }

  onDelete(room: Room): void {
    this.roomService.deleteRoom(room);
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
