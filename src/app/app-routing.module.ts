import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { BookComponent } from './components/book/book.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [

  { 
    path: '*',
    component: HomeComponent
  },
  { 
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books/edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/:id',
    component: BookComponent
  },

  {
    path: 'books/category/:id',
    component: HomeComponent
  },
  
  {
      path: '**',
      component: HomeComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}