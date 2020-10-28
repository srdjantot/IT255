import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'met-reservation-form',
  templateUrl: './reservation-form.dialog.html',
  styleUrls: ['./reservation-form.dialog.css']
})
export class ReservationFormDialog implements OnInit {
  numberOfNights: number;

  constructor(public dialogRef: MatDialogRef<ReservationFormDialog>,
    public roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public room: Room) { }

  ngOnInit(): void {
    this.numberOfNights = 1;
  }

}
