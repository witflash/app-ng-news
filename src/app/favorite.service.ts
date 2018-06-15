import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favKey: string = "favorite";

  constructor() { }

  private getFavorites() {
    const favLocal = localStorage.getItem(this.favKey);
    if (!favLocal) {
      return {};
    };
    return JSON.parse(favLocal);
  }

  public addToFavorites(name: string) {
    const favorites = this.getFavorites();
    favorites[name] = true;
    localStorage.setItem(this.favKey, JSON.stringify(favorites));
  }
  
  public removeFromFavorites(name: string) {
    const favorites = this.getFavorites();
    delete favorites[name];
    localStorage.setItem(this.favKey, JSON.stringify(favorites));
  }

  public isFavorite(name: string) {
    return this.getFavorites()[name];
  }
}
