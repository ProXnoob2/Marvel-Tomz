import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/Services/auth-guard/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { AdminMoviesComponent } from './Components/admin-movies/admin-movies.component';
import { AdminSeriesComponent } from './Components/admin-series/admin-series.component';
import { MovieAndSeriesFormComponent } from './Components/movie-and-series-form/movie-and-series-form.component';
import { AdminAuthGuard } from './Services/admin-auth-guard/admin-auth-guard.service';

@NgModule({
  declarations: [
    AdminMoviesComponent,
    AdminSeriesComponent,
    MovieAndSeriesFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/movies/new',
        component: MovieAndSeriesFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'admin/movies/:id',
        component: MovieAndSeriesFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'admin/movies',
        component: AdminMoviesComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'admin/series/new',
        component: MovieAndSeriesFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'admin/series/:id',
        component: MovieAndSeriesFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'admin/series',
        component: AdminSeriesComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
    ]),
  ],
  providers: [AdminAuthGuard],
})
export class AdminModule {}
