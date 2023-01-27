import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { MatModule } from 'app/mat.module';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from './Services/auth-guard/auth-guard.service';
import { AuthService } from './Services/auth/auth.service';
import { MoviesService } from './Services/movies/movies.service';
import { PhasesService } from './Services/phases/phases.service';
import { SeriesService } from './Services/series/series.service';
import { UserService } from './Services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: [
    CommonModule,
    MatModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    MoviesService,
    SeriesService,
    PhasesService,
  ],
})
export class SharedModule {}
