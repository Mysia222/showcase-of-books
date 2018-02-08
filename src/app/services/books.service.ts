import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { url } from 'inspector';

import { Book } from '../models/book';

const BOOKS_API: string = "./assets/data.json";

@Injectable()
export class BooksService {

    bookUrl = "http://localhost:8000/books";

    constructor (private http: Http) {

    }

    public createBook(book: Book):Observable<number> {

        return this.http.post(this.bookUrl, book)
            .map(response => response.json())
    } 

    public getAllBooks(): Observable<Book[]>  {

        return this.http.get(this.bookUrl)
            .map(response => response.json())
    }

    public getBookById(bookId: string): Observable<Book> {

        return this.http.get(this.bookUrl +"/"+ bookId)
            .map(response => response.json())

     } 

     public updateBook(book, bookId) {

        return this.http.put(this.bookUrl +"/" + bookId, book)
            .map(success => success.status)

    }

    public deleteBookById(bookId: string) {

        return this.http.delete(this.bookUrl +"/"+ bookId)
            .map(success => success.status)
            
    }

}