import { Component, OnInit, Input } from '@angular/core';
import { Article } from "../article";
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  providers: [FavoriteService]
})
export class NewsItemComponent {
  @Input() article: Article[];

  constructor(
    private favoriteService: FavoriteService
  ) { }

  isFavorite(name: string) {
    return this.favoriteService.isFavorite(name);
  }

  addToFavorites(name: string) {
    this.favoriteService.addToFavorites(name);
  }

  removeFromFavorites(name: string) {
    this.favoriteService.removeFromFavorites(name);
  }
}
