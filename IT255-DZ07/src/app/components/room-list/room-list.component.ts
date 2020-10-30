import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomFormDialog } from 'src/app/dialogs/room-form/room-form.dialog';
import { Room } from 'src/app/models/room.model';
import { RoomRepositoryService } from 'src/app/services/room-repository.service';

@Component({
  selector: 'met-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  maxPrice: number = null;

  constructor(private dialog: MatDialog, public repository: RoomRepositoryService) { }

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
        this.repository.change();
      }
    });
  }

  onDelete(room: Room): void {
    this.repository.remove(room);
  }

  onFilterChange(filter: number): void {
    this.maxPrice = filter;
  }
}
