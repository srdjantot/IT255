import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomFormData } from 'src/app/interfaces/room-form-data';
import { Room } from 'src/app/models/room.model';
import { filter, map } from 'rxjs/operators';
import { RoomService } from 'src/app/services/room.service';

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
    private formBuilder: FormBuilder,
    public roomService: RoomService) {
    this.title = data.new ? "Unos nove sobe" : "Uređivanje sobe";
    this.room = data.room;
  }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group({
      hotel: [this.room.hotel.name, Validators.required],
      description: [this.room.description, Validators.required],
      price: [this.room.price, Validators.min(1)],
      stars: [this.room.stars, [Validators.min(1), Validators.max(5)]]
    });

    this.roomForm.controls.hotel.valueChanges.pipe(
      filter((hotel: string) => this.filterCondition(hotel)),
      map(hotel => this.messageBuilder("Hotel", hotel))
    ).subscribe(message => console.log(message));

    this.roomForm.controls.description.valueChanges.pipe(
      filter((description: string) => this.filterCondition(description)),
      map(description => this.messageBuilder("Opis", description))
    ).subscribe(message => console.log(message));
  }

  private filterCondition(value: string): boolean {
    return !value || value.length < 6;
  }

  private messageBuilder(field: string, value: string): string {
    return `Vrednost polja ${field} je kraća od 6 znakova: ${value}`
  }

  addRoom(): void {
    if (this.roomForm.valid) {
      this.room.hotel = this.roomService.getOrAddHotel(this.roomForm.value.hotel);
      this.room.description = this.roomForm.value.description;
      this.room.price = this.roomForm.value.price;
      this.room.stars = this.roomForm.value.stars;
      this.dialogRef.close(this.room);
    }
  }

}
