import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Room } from 'src/app/models/room.model';
import { RoomFormDialog } from './room-form.dialog';

describe('Editing with RoomFormDialog', () => {
  const room = new Room('Hotel', 'Soba', 100, 4);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RoomFormDialog
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { new: false, room: room } }
      ]
    }).compileComponents();
  });

  it('should create the dialog', () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    const dialog = fixture.componentInstance;
    expect(dialog).toBeTruthy();
  });

  it(`should have as title 'Uređivanje sobe'`, () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    const dialog = fixture.componentInstance;
    expect(dialog.title).toEqual('Uređivanje sobe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-dialog-title').textContent).toEqual('Uređivanje sobe');
  });

  it('should have room', () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    const dialog = fixture.componentInstance;
    expect(dialog.room).toEqual(room);
  });

  it('should have inputs set', () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="hotel"]').value).toEqual('Hotel');
    expect(compiled.querySelector('[formcontrolname="description"]').value).toEqual('Soba');
    expect(compiled.querySelector('[formcontrolname="price"]').value).toEqual('100');
  });

  it('should be invalid for missing hotel', () => {
    const fixture = TestBed.createComponent(RoomFormDialog);
    const dialog = fixture.componentInstance;
    fixture.detectChanges();
    dialog.roomForm.controls['hotel'].setValue('');
    fixture.detectChanges();
    expect(dialog.roomForm.invalid).toBeTrue();
  });

});
