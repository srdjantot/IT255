import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Video } from 'src/app/models/video.model';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'yt-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  videoForm = this.formBuilder.group({
    link: ['', Validators.required]
  });
  @Output() videoToAdd = new EventEmitter<Video>();

  constructor(private formBuilder: FormBuilder, private youtubeService: YoutubeService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.videoForm.valid) {
      let video = this.youtubeService.getVideoFromLink(this.videoForm.value.link);
      this.videoToAdd.emit(video);
    }
  }
}
