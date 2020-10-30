import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'met-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css']
})
export class RoomFilterComponent implements OnInit {
  filterForm: FormGroup;
  @Output() filterChange = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      price: null
    });
  }

  ngOnInit(): void {
  }

  updateFilter(): void {
    this.filterChange.emit(this.filterForm.value.price);
  }

}
