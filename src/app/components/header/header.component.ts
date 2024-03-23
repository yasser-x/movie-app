import {Component, EventEmitter, Output} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {MoviesService} from "../../service/movies-service";

import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authenticate";
import {async} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText: string = '';
  @Output() onChange = new EventEmitter();

  constructor(private moviesService: MoviesService, private router: Router) {
  }

  ngOnInit() {
    this.searchMovies();
  }



  onSearchChange() {
    this.searchMovies();
  }

  searchMovies() {
    if (this.searchText != "")
      this.onChange.emit(this.searchText)
  }

  getText() {
    // Get the input element by its ID
    const inputElement: HTMLInputElement | null = document.getElementById("myInput") as HTMLInputElement;

    if (inputElement) {
      const inputValue: string = inputElement.value;

    }
  }



}



