import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private apiUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }


  getComments(movieId : number){
    return this.http.get(this.apiUrl + '/comments/' + movieId);
  }


  addComment(movieId: number, comment: any): Observable<any> {
    return this.http.post(this.apiUrl + '/comments/' + movieId, comment);
  }

  isMovieFavorite(movieId: number): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/movies/' + movieId + '/isFavorite');
  }

}
