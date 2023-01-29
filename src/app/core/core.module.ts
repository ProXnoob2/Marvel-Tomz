import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { AboutComponent } from './Components/about/about.component';
import { BsNavbarComponent } from './Components/bs-navbar/bs-navbar.component';
import { HomeShowcaseImgComponent } from './Components/home-showcase-img/home-showcase-img.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [BsNavbarComponent, HomeComponent, HomeShowcaseImgComponent, AboutComponent],
  imports: [SharedModule, RouterModule.forChild([])],
  exports: [BsNavbarComponent, HomeShowcaseImgComponent],
})
export class CoreModule {}
