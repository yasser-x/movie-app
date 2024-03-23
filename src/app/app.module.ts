import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { FilmDetailComponent } from './components/film-details/film-detail.component';
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {routes} from "./routing/routing.module";
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemQueryComponent } from './list-item-query/list-item-query.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    ListFilmComponent,
    FilmDetailComponent,
    CreateCommentComponent,
    ListCommentsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ListItemQueryComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
        RouterLink,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
