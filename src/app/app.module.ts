import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { YT_SECRET_PROVIDERS } from './secrets/youtube.secret';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    VideoBoxComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    YT_SECRET_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
