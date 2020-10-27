import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../models/video.model';
import { YT_API_KEY, YT_API_URL } from '../secrets/youtube.secret';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private sanitizer: DomSanitizer,
    private http: HttpClient,
    @Inject(YT_API_KEY) private apiKey: string,
    @Inject(YT_API_URL) private apiUrl: string) { }

  getVideoFromLink(link: string): Video {
    let id = this.getVideoId(link);
    let video = new Video('', '', this.getEmbedLink(id));

    this.http.get(this.apiUrl + '/videos', {
      params: new HttpParams()
        .set('part', 'snippet')
        .set('id', id)
        .set('key', this.apiKey)
    }).subscribe((data: any) => {
      video.title = data.items[0].snippet.title;
      video.description = data.items[0].snippet.description;
      video.loading = false;
    });

    return video;
  }

  private getVideoId(link: string): string {
    let parts = link.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (parts[2] !== undefined) ? parts[2].split(/[^0-9a-z_\-]/i)[0] : link;
  }

  private getEmbedLink(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
  }
}
