import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http, Response } from '@angular/http';
import { News } from './news';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: Http) {}

  public getAllNews(): Observable<News[]> {
    return this.http
      .get(API_URL + '/articles')
      .map(response => {
        const allNews = response.json();
        return allNews.map(article => new News(article));
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
