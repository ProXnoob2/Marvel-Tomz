import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Movie } from 'shared/Models/movie';
import { MoviesService } from 'shared/Services/movies/movies.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss'],
})
export class AdminMoviesComponent implements AfterViewInit {
  movies!: Movie[] | any;
  subscription!: Subscription;

  displayedColumns: string[] = ['title', 'phase', 'edit'];
  dataSource = new MatTableDataSource<Movie>(this.movies);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moviesService: MoviesService) {
    this.subscription = this.moviesService.getAll().subscribe((movies) => {
      this.movies = movies;
      this.dataSource.data = movies;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.dataSource.data = this.movies;
    this.dataSource.data = value
      ? this.dataSource.data.filter((m) => m.title.toLowerCase().includes(value.toLowerCase()))
      : this.movies;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
