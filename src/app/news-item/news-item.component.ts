import { Component, OnInit, Input } from '@angular/core';
import { Article } from "../article";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() article: Article[];

  constructor() { }

  ngOnInit() {
    console.log('Article: ', this.article);
  }

}
