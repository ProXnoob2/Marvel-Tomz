import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'shared/Models/movie';
import { MoviesService } from 'shared/Services/movies/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movies$!: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) {
    this.movies$ = this.moviesService.getAll();
  }
}
