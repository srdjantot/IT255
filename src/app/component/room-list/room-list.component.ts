import { Component, OnInit } from '@angular/core';
import { RoomRepositoryService } from '../../service/room-repository.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  filter = false;
  filterValue = 500;

  constructor(public repository: RoomRepositoryService) {
  }

  ngOnInit(): void {
  }

  toggleFilter(): void {
    this.filter = !this.filter;
  }

}
