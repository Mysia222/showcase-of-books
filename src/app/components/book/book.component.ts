import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { BooksService } from '../../services/books.service';
import { AuthService } from '../../services/auth.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',  
  styleUrls: ['./book.component.css'],
  providers: [BooksService]
})

export class BookComponent  {
  currentUrl;
  book;
  statusCode: number;
  bookObs;
  isDelete = false;
  @Input() isAdmin;

  EditBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
});

  constructor(
    private booksService: BooksService, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router:Router) {
  }
 

  getBookById(bookId) 
  {
    this.bookObs = this.booksService.getBookById(bookId);
  }

  onUpdateBookSubmit() {

    this.book = this.EditBookForm.value;
    this.booksService.getBookById(this.currentUrl.id).subscribe(
        book => {
            for (var key in this.book) {
                if (!this.book[key]) {
                    this.book[key] = book[key];
                }
            }
            this.booksService.updateBook(this.book, this.currentUrl.id)
                .subscribe(successCode => {
                        this.statusCode = successCode;
                        this.bookObs = this.booksService.getBookById(this.currentUrl.id);
                },
                errorCode => this.statusCode = errorCode);

        }
    );
}

deleteBook() {

    this.isDelete = true
    this.booksService.deleteBookById(this.currentUrl.id)
        .subscribe(successCode => {
            this.statusCode = 204;
        }, errorCode => this.statusCode = errorCode);

}

  ngOnInit() {

    this.currentUrl = this.activatedRoute.snapshot.params;
    this.getBookById(this.currentUrl.id);

  }

}