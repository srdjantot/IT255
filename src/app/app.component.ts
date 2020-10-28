import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomFormDialog } from './dialogs/room-form/room-form.dialog';
import { Hotel } from './models/hotel.model';
import { Room } from './models/room.model';
import { RoomService } from './services/room.service';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Met hotels';

  constructor(private dialog: MatDialog, private roomService: RoomService) { }

  openAddRoomDialog(): void {
    this.dialog.open(RoomFormDialog, {
      data: {
        new: true,
        room: new Room(new Hotel(''), '', 0, 1)
      }
    }).afterClosed().subscribe(room => {
      if (room) {
        this.roomService.addRoom(room);
      }
    });
  }
}
