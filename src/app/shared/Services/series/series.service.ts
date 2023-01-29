import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Series } from 'shared/Models/series';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private db: AngularFireDatabase) {}

  create(series: Series) {
    return this.db.list('/series').push(series);
  }

  getAll(): Observable<Series[] | any> {
    return this.db
      .list<Series[] | any>('/series')
      .snapshotChanges()
      .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  get(seriesId: string | number) {
    return this.db.object('/series/' + seriesId).valueChanges();
  }

  update(seriesId: string | number, series: Series) {
    return this.db.object('/series/' + seriesId).update(series);
  }

  remove(seriesId: string | number) {
    return this.db.object('/series/' + seriesId).remove();
  }
}
