import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../model/movie";
import {DbServiceService} from "../../service/db-service.service";


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent{

  constructor(private db : DbServiceService) {
  }


   @Input() movie : any ;
   @Output() change : EventEmitter<string> = new EventEmitter();
  public getStarRating(voteAverage: number): string {
    // Implement logic to convert vote average to star rating format
    const rating = Math.round(voteAverage / 2); // Assuming a 10-point scale
    return '⭐'.repeat(rating);
  }

  isfavorite(id : number){
    this.db.isMovieFavorite(id)
  }








}
