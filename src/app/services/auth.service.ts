import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthService {

    private isUserLoggedIn: boolean;
    private isAdminLoggedIn: boolean;
    private token: string;
    public authURL: string;
    private userId: any;
    private adminId = "5a7abb39f766371cc0a70191";
    
  constructor( private http: Http) { 
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.authURL = "http://localhost:8000/auth";
  }

  private saveToken(token: string): void {

    localStorage.setItem('mean-token', token);
    this.token = token;

}

private getToken(): string {

    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;

}

private getUserDetails(): User {

    const token = this.getToken();
    let user;
    if (token) {
      user = token.split('.')[1];
      user = window.atob(user);
      return JSON.parse(user);
    } else {
      return null;
    }

}

public isLoggedIn() {

    const user = this.getUserDetails();
    this.userId = user._id;
    return user;

}

public logIn(user) {

    return this.http.post(this.authURL + '/login', user)
    .map(data => {
        if (data.json().token) {
            this.saveToken(data.json().token);
          }
     return data;
    });

}

public setloggedIn() {

    this.isLoggedIn();
    this.isUserLoggedIn = true;
    this.isAdminLoggedIn = this.userId === this.adminId;

}

public setloggedOut() {

    this.isAdminLoggedIn = false;
    this.isUserLoggedIn = false;

    localStorage.clear();

}

public getloggedIn() {
  
    return this.isUserLoggedIn;

}

public getloggedAdminIn() {

    return this.isAdminLoggedIn

}

}