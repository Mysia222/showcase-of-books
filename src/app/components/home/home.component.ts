import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {BooksService} from '../../services/books.service';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ],
  providers: [BooksService]
})

export class HomeComponent  {

  public searchableList : any[];
  booksObs: Observable<Book[]>;
  isAdmin;
  category;
  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchableList = ['title'];
    this.isAdmin = false;
  }
 
  state: string = 'small';

  animateMe() {
    
     this.state = (this.state === 'small' ? 'large' : 'small');
  }

  getAllBooks() 
    {
      
      this.booksObs = this.booksService.getAllBooks();
  }

  ngOnInit() {
    
    if(this.activatedRoute.snapshot.params) {
       this.category = this.activatedRoute.snapshot.params;
    }

    this.getAllBooks();

  }
}