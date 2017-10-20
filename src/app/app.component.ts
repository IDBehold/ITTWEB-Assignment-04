import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness application - Grp 19';
  constructor(private auth: AuthenticationService, private router: Router){

  }

  logout(){
    this.auth.logout();
    window.location.reload();
  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
}

