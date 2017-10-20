import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(private router: Router,
              private auth: AuthenticationService,) {
  }

  register() {
    this.loading = true;
    this.auth.register(this.model.name, this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
        });
  }
}
