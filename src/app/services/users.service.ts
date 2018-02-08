import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { url } from 'inspector';

import { User } from '../models/user';

@Injectable()
export class UsersService {

    url = "http://localhost:8000";
    registerUrl = "http://localhost:8000/auth";
    loginURL = "http://localhost:8000/auth";
    private token = localStorage.getItem('mean-token');
    private userEmail: string;
    constructor (private http: Http, private router: Router) {

    }

    createUser(user: User):Observable<any> {

        return this.http.post(this.registerUrl + "/register", user)
            .map(response => response.json())
            
    } 


    getAllUsers(): Observable<User[]>  {

        return this.http.get(this.registerUrl)
            .map(response => response.json())

    }

    updateUser(book) {

        return this.http.put(this.url +"/"+ book.id, book)
            .map(response => response.json())

    } 

    deleteUserById(bookId: string) {

        return this.http.delete(this.url +"/"+ bookId)
            .map(response => response.json())

    }

}