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
  profile;

  constructor(private router:Router, private authService: AuthService, private usersService: UsersService) {}

  ngOnInit() {

  }
  
  loginUser(e) {

    e.preventDefault();

    let user = {
        email: e.target.elements[0].value,
        password: e.target.elements[1].value
    };

    this.authService.logIn(user).subscribe(data => {

        this.authService.setloggedIn();
        this.authService.isLoggedIn();

        if (this.authService.getloggedAdminIn()) {
            this.router.navigate(['books/edit']);
        } else {
            this.router.navigate(['profile']);

        }

    });
 }
}
