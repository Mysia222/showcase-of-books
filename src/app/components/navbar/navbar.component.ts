
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',  
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    constructor(private authService: AuthService, private router: Router) {}

  booksTitle = 'Books';

  categories =[
    {
        "category_id": 1,
        "category_name": "Fiction"
    }, 
    {
        "category_id": 2,
        "category_name": "Food"
    }, 
    {
        "category_id": 3,
        "category_name": "Graphic Novels"
    }, 
    {
        "category_id": 4,
        "category_name": "Fantasy"
    }, 
    {
        "category_id": 5,
        "category_name": "Thriller"
    }, 
    {
        "category_id": 6,
        "category_name": "Biography"
    }

  ]; 

  LogOut() {
    this.authService.setloggedOut();
    localStorage.clear();
    this.router.navigate(['home']);
  }

  ngOnInit() {
  
  }


}
