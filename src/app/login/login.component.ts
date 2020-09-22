import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private auth:AuthService
  ) { }
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    remember: new FormControl(''),
  });

  Login(){
    console.warn(this.loginForm.value);
    this.auth.login(this.loginForm.value);
  }
}
