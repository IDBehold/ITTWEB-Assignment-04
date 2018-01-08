import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {WorkoutsService} from "../workouts.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  register(name: string, email: string, password: string) : Observable<void> {
    return this.http.post('https://salty-garden-88598.herokuapp.com/api/register', {
      name: name,
      email: email,
      password: password
    })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('jwt-token', user.token);
        }
      });
  }

  login(email: string, password: string) : Observable<void>  {
    return this.http.post('https://salty-garden-88598.herokuapp.com/api/login', {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('jwt-token', user.token);
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt-token');
    console.log('Removing token');
  }

  getToken() {
    if (window.localStorage['jwt-token']) {
      return window.localStorage['jwt-token'];
    } else {
      return '';
    }
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
