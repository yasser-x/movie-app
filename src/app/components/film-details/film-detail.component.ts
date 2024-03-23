import {Component, EventEmitter, Output} from '@angular/core';
import {Movie} from "../../model/movie";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../service/movies-service";
import {HttpErrorResponse} from "@angular/common/http";
import {DbServiceService} from "../../service/db-service.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent {
  movie : any;


  constructor(private router : ActivatedRoute, private moviesService : MoviesService , private db : DbServiceService) {
  }

  ngOnInit(): void {
    // Get the ID from the URL
    const movieId = this.router.snapshot.params['id']
    // Use the ID to fetch the movie details
    this.getMovieById(movieId);
  }

  showInput: boolean = false;
  inputValue: string = '';

  toggleInput(): void {
    this.showInput = !this.showInput;
    if (!this.showInput) {
      this.inputValue = '';
    }
  }


  getText() {
    // Get the input element by its ID
    const inputElement: HTMLInputElement | null = document.getElementById("comment") as HTMLInputElement;

    if (inputElement) {
      const inputValue: string = inputElement.value;

    }
    return inputElement.value
  }

  addcomments(movieid : number , comment : string){
    this.db.addComment(movieid , comment)
  }



  private getMovieById(movieId: any) {
    this.moviesService.getMovieById(movieId).subscribe(
      (response: any): void =>{
        this.movie = response;
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    );
  }

  getImage(path: string) {
    return this.moviesService.getImageUrl(path)
  }

  public getStarRating(voteAverage: number): string {
    // Implement logic to convert vote average to star rating format
    const rating = Math.round(voteAverage / 2); // Assuming a 10-point scale
    return '⭐'.repeat(rating);
  }
}











