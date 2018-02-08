import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core/src/metadata/directives';
import { AuthService } from '../../services/auth.service';
import { BooksService } from '../../services/books.service'

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { create } from 'domain';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',  
  styleUrls: ['./edit.component.css'],
  providers: [BooksService]
})
export class EditComponent  {
  public books=[];
  public searchableList: any[];
  processValidation = false;
  statusCode: number;
  booksObs;
  isAdmin;

  BookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    authors: new FormControl('', Validators.required),	 
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),

});

  constructor( private booksService: BooksService) {

    this.searchableList = ['title'];
   
  }

  getAllBooks() {

    this.booksObs = this.booksService.getAllBooks();
  
}

onBookFormSubmit() {

  this.processValidation = true;
  if (this.BookForm.invalid) {
      return;
  }

  let book = this.BookForm.value;

  this.booksService.createBook(book)
      .subscribe(data => {
          this.getAllBooks();
      });

}

deleteBook(bookId) {

  this.booksService.deleteBookById(bookId)
     .subscribe(successCode => {
         this.statusCode = 204;
         this.getAllBooks();
     }, errorCode => this.statusCode = errorCode);

}

  ngOnInit() {
    
    this.getAllBooks();
    this.isAdmin = true;

  }

}