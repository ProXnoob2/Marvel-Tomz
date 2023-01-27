import { Component, OnInit } from '@angular/core';
import { AppUser } from 'shared/Models/app-user';
import { AuthService } from 'shared/Services/auth/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss'],
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser | any;

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe((appUser: any) => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
