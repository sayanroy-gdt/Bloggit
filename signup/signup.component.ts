import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  
  first_name: string;
  last_name: string;

  constructor(public fb: FormBuilder, public authService: AuthService) { 
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['', [Validators.required]],
      password: ['',[Validators.required]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },{
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })
  }

  checkIfMatchingPasswords(passwordKey: string, conPasswordKey: string){
    return(group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[conPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signupform){
    let email: string= signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then(() => {
        this.message = "You have been signed up successfully. Please login."
      }).catch ((error) => {
      console.log(error);
      this.userError=error;
    })
  }

  ngOnInit(): void {
  }

}
