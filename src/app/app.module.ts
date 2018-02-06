import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditComponent } from './components/edit/edit.component';
import { BookComponent } from './components/book/book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthService} from './services/auth.service';
import { UsersService } from './services/users.service';

import { HttpModule } from '@angular/http';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { AuthGuard } from './guards/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    EditComponent,
    FilterPipe,
    SortPipe,
    BookComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
