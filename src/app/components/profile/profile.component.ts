import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService} from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',  
  styleUrls: ['./profile.component.css'],
  providers: []
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

EditProfileForm = new FormGroup({
  email: new FormControl('', Validators.required),
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required)
});

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router:Router,
    private usersService: UsersService) {
  }
 

  ngOnInit() {
    this.profile = this.authService.isLoggedIn();
  }
}