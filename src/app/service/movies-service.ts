import { Injectable } from '@angular/core';
import {Movie} from "../model/movie";
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Result} from "../model/result";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=dac1e8a902a42ba7db177822539c5178';
  private API_TOKEN = "dac1e8a902a42ba7db177822539c5178"
  popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=4722616a8836f0b929a9cb3a04f6a6a4";


  constructor(private http: HttpClient) {

  }


  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getPopularMovies(): Observable<Result> {
    return this.http.get<Result>(this.popularUrl);
  }
  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }


  searchMovies(query: string): Observable<any> {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_TOKEN}&language=fr&query=${query}&page=1`;
    return this.http.get(searchUrl);
  }

}
