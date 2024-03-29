import { Component } from '@angular/core';
import { AuthService } from 'shared/Services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.login();
  }

  // ngOnInit() {
  //   this.auth.user$.subscribe({
  //     next: (user) => {
  //       let returnUrl = localStorage.getItem('returnUrl');
  //       if (user && returnUrl === null) this.router.navigate(['/']);
  //       else return;
  //     },
  //   });
  // }
}
