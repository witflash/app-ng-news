import { Component, OnInit, Input } from '@angular/core';
import { Article } from "../article";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() allNews: Article[];

  constructor() { }

  ngOnInit() {
    console.log('allNews', this.allNews);
  }

}
