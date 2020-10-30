import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { YT_API_KEY, YT_API_URL } from '../secrets/youtube.secret';
import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  const apiKey = 'apiKey';
  const apiUrl = 'apiUrl';
  const shortVideoId = 'T6KKxm0uzM0';
  const longVideoId = 'https://www.youtube.com/watch?v=T6KKxm0uzM0';
  const videoData = {
    items: [{
      snippet: {
        title: 'title',
        description: 'description'
      }
    }]
  };
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientTestingModule
      ],
      providers: [
        YoutubeService,
        { provide: YT_API_KEY, useValue: apiKey },
        { provide: YT_API_URL, useValue: apiUrl }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create the service', () => {
    const service = TestBed.inject(YoutubeService);
    expect(service).toBeTruthy();
  });

  it('#getVideoFromLink should return correct embedded link for short id', () => {
    const service = TestBed.inject(YoutubeService);
    const video = service.getVideoFromLink(shortVideoId);
    expect(video.link).toEqual(sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/T6KKxm0uzM0'));
  });

  it('#getVideoFromLink should return correct embedded link for long id', () => {
    const service = TestBed.inject(YoutubeService);
    const video = service.getVideoFromLink(longVideoId);
    expect(video.link).toEqual(sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/T6KKxm0uzM0'));
  });

  it('#getVideoFromLink should make correct request', () => {
    const service = TestBed.inject(YoutubeService);
    service.getVideoFromLink(shortVideoId);
    const req = httpTestingController.expectOne(apiUrl + '/videos?part=snippet&id=T6KKxm0uzM0&key=apiKey');
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
  });

  it('#getVideoFromLink should return Video', () => {
    const service = TestBed.inject(YoutubeService);
    const video = service.getVideoFromLink(shortVideoId);
    expect(video.loading).toBeTrue();
    const req = httpTestingController.expectOne(apiUrl + '/videos?part=snippet&id=T6KKxm0uzM0&key=apiKey');
    req.flush(videoData);
    expect(video.loading).toBeFalse();
    expect(video.title).toEqual('title');
    expect(video.description).toEqual('description');
    httpTestingController.verify();
  });

});
