import { Component, Input } from '@angular/core';
import { Movie } from 'shared/Models/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input('movie') movie!: Movie;

  constructor() {}
}
