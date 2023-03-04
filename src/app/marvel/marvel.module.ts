import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [MoviesComponent, SeriesComponent],
  imports: [SharedModule],
  exports: [MoviesComponent, SeriesComponent],
})
export class MarvelModule {}
