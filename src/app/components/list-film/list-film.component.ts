import { Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";
import {MoviesService} from "../../service/movies-service";
import { HttpErrorResponse } from '@angular/common/http';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit{
  movies : Array<any> =[];

  constructor(private moviesService : MoviesService) {
  }


  ngOnInit() {
    this.getMovies();
  }
  public getMovies(){
    this.moviesService.getMovies().subscribe(
      (response: any): void =>{
        this.movies = response.results;
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    );
  }

  protected readonly onchange = onchange;

  onChange($event: any) {
    console.log($event)
    if($event.trim() == ''){
      this.getMovies();
    }
    else{
      this.movies = this.searchMovies($event)
    }
  }


  searchMovies(query : string) : any {

    this.moviesService.searchMovies(query).subscribe((data: any) => {
        this.movies = data.results;
        console.log(data.results.length);
      },
      (error) => {
        // Handle errors here
        console.error('Error fetching search results:', error);
      }
    );
  }

}
