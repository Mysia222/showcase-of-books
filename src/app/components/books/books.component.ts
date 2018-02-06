import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',  
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})

export class BooksComponent  {

  @Input() book;
  @Input() category;
  imageUrl;
  constructor(private booksService: BooksService) {
  }

  isCategory() {
    return this.category.id === undefined || this.category.id === this.book.category ||  this.category.id === undefined;
  }
 


  ngOnInit() {

    
  }
}