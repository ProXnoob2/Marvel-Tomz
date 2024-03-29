import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared/Services/auth/auth.service';
import { UserService } from 'shared/Services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService, public router: Router, private userService: UserService) {
    auth.user$.subscribe({
      next: (user) => {
        if (user) {
          userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
          if (returnUrl) {
            router.navigate([returnUrl]);
            localStorage.removeItem('returnUrl');
          }
        }
      },
    });
  }
}
