import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, NewsListComponent, NewsItemComponent, SearchComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
