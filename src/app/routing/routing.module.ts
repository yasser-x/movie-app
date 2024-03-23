import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {ListFilmComponent} from "../components/list-film/list-film.component";
import {FilmItemComponent} from "../components/film-item/film-item.component";
import {FilmDetailComponent} from "../components/film-details/film-detail.component";
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";


export const routes: Routes = [
    {path : 'film/all', component : ListFilmComponent },
    {path : 'film/:id', component : FilmDetailComponent},
    {path : 'Login' , component : LoginComponent},
  {path : 'Signup' , component:SignupComponent},

    {path : '**', redirectTo : '/film/all'},
  ];



