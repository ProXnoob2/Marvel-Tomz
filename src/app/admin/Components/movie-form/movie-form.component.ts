import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'shared/Models/movie';
import { MoviesService } from 'shared/Services/movies/movies.service';
import { PhasesService } from 'shared/Services/phases/phases.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent {
  movie: Movie | any = {};
  id!: any;
  phases$!: any;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute,
    private phasesService: PhasesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.moviesService
        .get(this.id)
        .pipe(take(1))
        .subscribe({
          next: (m) => {
            this.movie = m;
          },
        });

    this.phases$ = this.phasesService.getAll();
  }

  save(movie: Movie) {
    movie.releaseDate = new Date(movie.releaseDate).toISOString();
    if (this.id) this.moviesService.update(this.id, movie);
    else this.moviesService.create(movie);
    this.router.navigate(['/admin/movies']);
  }

  remove() {
    if (!confirm('Are you sure you want to delete this movie?')) return;
    else {
      this.moviesService.remove(this.id);
      this.router.navigate(['/admin/movies']);
    }
  }
}
