import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private isUserLoggedIn;
    private username;
    public loginURL;
    
  constructor( private http: Http) { 
    this.isUserLoggedIn = false;
    this.loginURL = "http://localhost:3000/auth/login";
  }

  logout() {

  }

  setloggedIn() {
    this.isUserLoggedIn = true;
  }
  setloggedOut() {
    this.isUserLoggedIn = false;
  }
  getloggedIn() {
    return this.isUserLoggedIn;
  }

  logIn(email, password) {

    let logInData = {
      email: email,
      password: password
    }

    return this.http.post(this.loginURL, JSON.stringify(logInData));
    
  }

  login(user) {
    return this.http.post(this.loginURL + '/authentication/login', user).map(res => res.json());
  }


  storeUserData(email, password) {
    let logInData = {
      email: email,
      password: password
    };

    localStorage.setItem('user', JSON.stringify(logInData));

  }

}