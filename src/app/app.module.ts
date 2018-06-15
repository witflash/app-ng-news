import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [AppComponent, NewsListComponent, NewsItemComponent],
  imports: [BrowserModule, HttpModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
