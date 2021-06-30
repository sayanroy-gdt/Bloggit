import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import * as firebase from 'firebase/app'
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string="";
  userError: any;

  constructor(public fb: FormBuilder, public router: Router) {
    this.myForm = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then((data) => {
      console.log(data);
      this.message= "You have logged in."
      this.router.navigate(['/myblogs'])
    }).catch((error) => {
      console.log(error);
      this.userError= error;
    })
  }

}
