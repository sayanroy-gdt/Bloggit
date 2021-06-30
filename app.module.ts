import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';

let firebaseConfig = {
  apiKey: "AIzaSyBT27MjKJb9ndqurO4O_8bzfteLGr7sc54",
  authDomain: "the-daily-blog-ea45e.firebaseapp.com",
  databaseURL: "https://the-daily-blog-ea45e.firebaseio.com",
  projectId: "the-daily-blog-ea45e",
  storageBucket: "the-daily-blog-ea45e.appspot.com",
  messagingSenderId: "1036384531901",
  appId: "1:1036384531901:web:7c2a6a7fa613d7c1d38ed4"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
