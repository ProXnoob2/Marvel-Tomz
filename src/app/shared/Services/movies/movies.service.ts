import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Movie } from 'shared/Models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private db: AngularFireDatabase) {}

  create(movie: Movie) {
    return this.db.list('/movies').push(movie);
  }

  getAll(): Observable<Movie[] | any> {
    return this.db
      .list<Movie[] | any>('/movies')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  get(movieId: string | number) {
    return this.db.object('/movies/' + movieId).valueChanges();
  }

  update(movieId: string | number, movie: Movie) {
    return this.db.object('/movies/' + movieId).update(movie);
  }

  remove(movieId: string | number) {
    return this.db.object('/movies/' + movieId).remove();
  }
}
