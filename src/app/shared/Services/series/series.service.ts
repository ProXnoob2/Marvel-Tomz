import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private db: AngularFireDatabase) {}

  create(series: any) {
    return this.db.list('/serieses').push(series);
  }

  getAll(): Observable<any> {
    return this.db
      .list<any>('/serieses')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  get(seriesId: string | number) {
    return this.db.object('/serieses/' + seriesId).valueChanges();
  }

  update(seriesId: string | number, series: any) {
    return this.db.object('/serieses/' + seriesId).update(series);
  }

  remove(seriesId: string | number) {
    return this.db.object('/serieses/' + seriesId).remove();
  }
}
