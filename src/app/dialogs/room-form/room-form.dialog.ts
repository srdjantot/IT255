import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomFormData } from 'src/app/interfaces/room-form-data';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'met-room-form',
  templateUrl: './room-form.dialog.html',
  styleUrls: ['./room-form.dialog.css']
})
export class RoomFormDialog implements OnInit {
  roomForm: FormGroup;
  title: string;
  room: Room;

  constructor(public dialogRef: MatDialogRef<RoomFormDialog>,
    @Inject(MAT_DIALOG_DATA) private data: RoomFormData,
    private formBuilder: FormBuilder) {
    this.title = data.new ? "Unos nove sobe" : "Uređivanje sobe";
    this.room = data.room;
  }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group({
      hotel: [this.room.hotel, Validators.required],
      description: [this.room.description, Validators.required],
      price: [this.room.price, Validators.min(1)],
      stars: [this.room.stars, [Validators.min(1), Validators.max(5)]]
    });
  }

  addRoom(): void {
    if (this.roomForm.valid) {
      this.room.hotel = this.roomForm.value.hotel;
      this.room.description = this.roomForm.value.description;
      this.room.price = this.roomForm.value.price;
      this.room.stars = this.roomForm.value.stars;
      this.dialogRef.close(this.room);
    }
  }

}
