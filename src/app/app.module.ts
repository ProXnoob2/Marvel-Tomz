import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'environments/environment';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MatModule } from './mat.module';
import { MembershipModule } from './membership/membership.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CoreModule,
    SharedModule,
    MembershipModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
