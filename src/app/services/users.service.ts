import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { url } from 'inspector';

import { User } from '../models/user';

const BOOKS_API: string = "./assets/data.json";

@Injectable()
export class UsersService {

    userUrl = "http://localhost:3000/users";
    registerUrl = "http://localhost:3000/auth";

    constructor (private http: Http) {

    }


    createUser(user: User):Observable<number> {
        console.log(user);
        console.log(this.http.post(this.registerUrl, user));
        return this.http.post(this.registerUrl, user)
            .map(success => success.status)
    } 


    getAllUsers(): Observable<User[]>  {

        return this.http.get(this.registerUrl)
        .map(response => response.json())

    }

    setHeader() {

        let objectHeader = {
            headers: new Headers({ 'Content-Type': 'application/json' }),
            options: function() { return new RequestOptions({ headers: this.headers })}
        }
        return objectHeader;
    }

    getUserById(userId: string): Observable<User> {

        /*let cpParams = new URLSearchParams();
        cpParams.set('id', bookId);			
        let options = new RequestOptions({ headers: this.setHeader().headers, params: cpParams });
        return this.http.get(this.bookUrl, options)*/

        return this.http.get(this.userUrl +"/"+ userId)
        .map(response => response.json())

     } 

     updateUser(book) {
        return this.http.put(this.userUrl +"/"+ book.id, book, this.setHeader().options)
               .map(success => success.status)
    } 

    deleteUserById(bookId: string) {
        return this.http.delete(this.userUrl +"/"+ bookId)
               .map(success => success.status)
    }

}