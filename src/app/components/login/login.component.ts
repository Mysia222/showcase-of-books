import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService} from '../../services/auth.service';
import { UsersService} from '../../services/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: string;

  constructor(private router:Router, private authService:AuthService, private usersService: UsersService) {}

  ngOnInit() {
    this.message = 'Hello'; 
  }
  
  loginUser(e) {

    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var user = {
      email: email,
      password: password
    };
    if(email == 'admin@gmail.com' && password == 'admin') {
      this.authService.setloggedIn();
      this.router.navigate(['books/edit']);
    }

    localStorage.setItem('user', JSON.stringify(user));

 /*  this.authService.logIn(email, password).subscribe(data => {  
    console.log(data);
  });;*/
     
/*
    return this.getAllUsers()
    .map(user => {

      let filteredUsers = users.filter(user => {
        return user.username === request.body.username && user.password === request.body.password;
    });
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    });
*/
 }
}