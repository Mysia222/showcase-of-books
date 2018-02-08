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

  constructor(private booksService: BooksService) {
  }
 
  ngOnInit() {

    
  }
  
}