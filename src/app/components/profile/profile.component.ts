import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { BooksService } from '../../services/books.service';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',  
  styleUrls: ['./profile.component.css'],
  providers: [BooksService]
})

export class ProfileComponent  {
  currentUrl;
  profile;
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
});

  constructor(
    private booksService: BooksService, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router:Router) {
  }
 

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('user'));
    this.currentUrl = this.activatedRoute.snapshot.params;
    console.log(this.profile);

  }

}