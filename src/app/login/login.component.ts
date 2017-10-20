import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
        });
  }
}
