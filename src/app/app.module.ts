import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { BlogEntryPage } from './pages/blog-entry/blog-entry.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePage,
    AboutPage,
    BlogPage,
    BlogEntryPage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
