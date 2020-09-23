import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { map, catchError } from 'rxjs/operators;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDetails;
  apiURL = 'http://localhost:5000/';
  constructor(private http: HttpClient, private router: Router) {}
  login(loginform) {
    console.log(loginform.username);
    let body = {
      username: loginform.username,
      password: loginform.password,
    };

    return this.http
      .post(this.apiURL + 'users/login', body, {
        // headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'json',
      })
      .subscribe((result) => {
        this.userDetails = result;
        console.log(result);
        localStorage.setItem(
          'token',
          JSON.stringify(this.userDetails['token'])
        );
        this.router.navigate(['/dashboard']);
      });
  }
  isLoggedIn() {
    let token1 = JSON.parse(localStorage.getItem('token'));
    return this.http
      .get(this.apiURL + 'users/me',{
        responseType: 'json',
        // token: token1
        headers: new HttpHeaders().set('token', token1),

      })
      .subscribe((res) => {
        console.log(res);
        if(res) {
          return true;
        }
        return false;
      });
  }
  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
