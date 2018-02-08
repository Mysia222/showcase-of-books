import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {BooksService} from '../../services/books.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css'],
  providers: [BooksService]
})

export class HomeComponent  {

  public searchableList : any[];
  booksObs: Observable<Book[]>;
  category;
  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute
  ) {}
 
  getAllBooks() {

    this.booksObs = this.booksService.getAllBooks();
  }

   ngOnInit() {

    if (this.activatedRoute.snapshot.params) {
        this.category = this.activatedRoute.snapshot.params;
    }

    this.getAllBooks();

  }
}