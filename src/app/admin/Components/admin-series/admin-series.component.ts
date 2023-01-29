import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Movie } from 'shared/Models/movie';
import { Series } from 'shared/Models/series';
import { MoviesService } from 'shared/Services/movies/movies.service';
import { SeriesService } from 'shared/Services/series/series.service';

@Component({
  selector: 'app-admin-series',
  templateUrl: './admin-series.component.html',
  styleUrls: ['./admin-series.component.scss'],
})
export class AdminSeriesComponent implements AfterViewInit {
  series!: Series[] | any;
  subscription!: Subscription;

  displayedColumns: string[] = ['title', 'phase', 'edit'];
  dataSource = new MatTableDataSource<Series>(this.series);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private seriesService: SeriesService) {
    this.subscription = this.seriesService.getAll().subscribe((series) => {
      this.series = series;
      this.dataSource.data = series;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.dataSource.data = this.series;
    this.dataSource.data = value
      ? this.dataSource.data.filter((m) =>
          m.title.toLowerCase().includes(value.toLowerCase())
        )
      : this.series;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
