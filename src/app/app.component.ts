import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  allNews: Article[] = [];

  constructor(private apiService: ApiService) {}

  public ngOnInit() {
    this.apiService.getAllNews().subscribe(allNews => {
      this.allNews = allNews;
    });
  }
}
