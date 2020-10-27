import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'yt-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.css']
})
export class VideoBoxComponent implements OnInit {
  @Output() videoToDelete = new EventEmitter<Video>();
  @Input() video: Video;

  constructor() { }

  ngOnInit(): void {
  }

  deleteVideo(): void {
    this.videoToDelete.emit(this.video);
  }

}
