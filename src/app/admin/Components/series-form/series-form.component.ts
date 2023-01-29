import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'shared/Models/movie';
import { Series } from 'shared/Models/series';
import { MoviesService } from 'shared/Services/movies/movies.service';
import { PhasesService } from 'shared/Services/phases/phases.service';
import { SeriesService } from 'shared/Services/series/series.service';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss'],
})
export class SeriesFormComponent {
  series: Series | any = {};
  id!: any;
  phases$!: any;

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute,
    private phasesService: PhasesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.seriesService
        .get(this.id)
        .pipe(take(1))
        .subscribe({
          next: (s) => {
            this.series = s;
          },
        });

    this.phases$ = this.phasesService.getAll();
  }

  save(series: Series) {
    series.startStreamingDate = new Date(
      series.startStreamingDate
    ).toISOString();
    series.endStreamingDate = new Date(series.endStreamingDate).toISOString();
    if (this.id) this.seriesService.update(this.id, series);
    else this.seriesService.create(series);
    this.router.navigate(['/admin/series']);
  }

  remove() {
    if (!confirm('Are you sure you want to delete this series?')) return;
    else {
      this.seriesService.remove(this.id);
      this.router.navigate(['/admin/series']);
    }
  }
}
