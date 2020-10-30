import { Component } from '@angular/core';
import { Video } from './models/video.model';

@Component({
  selector: 'yt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: Video[] = [];
  searchText: string;

  addVideo(video: Video): void {
    this.videos.push(video);
  }

  deleteVideo(video: Video): void {
    this.videos = this.videos.filter(item => item !== video);
  }
}
