import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomFormDialog } from './dialogs/room-form/room-form.dialog';
import { Room } from './models/room.model';
import { RoomRepositoryService } from './services/room-repository.service';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Met hotels';

  constructor(private dialog: MatDialog, private roomRepository: RoomRepositoryService) { }

  openAddRoomDialog(): void {
    this.dialog.open(RoomFormDialog, {
      data: {
        new: true,
        room: new Room('', '', 0, 1)
      }
    }).afterClosed().subscribe(room => {
      if (room) {
        this.roomRepository.add(room);
      }
    });
  }
}
