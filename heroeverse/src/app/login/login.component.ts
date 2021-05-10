import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TokenAuthService } from '../services/token-auth.service'
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private loginFormBuilder: FormBuilder,private usersService: UsersService, private tokenService: TokenAuthService, private router: Router) { }

  loginForm = new FormGroup ({ username: new FormControl(), password: new FormControl()});

  createForm(){
    this.loginForm = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      console.log('token existe')
    }
  }

  loggIn(){
    this.usersService.loggIn(this.loginForm.value)
    .subscribe(
      res => {
        this.tokenService.saveToken(res.token)
        this.tokenService.saveUser(this.loginForm.controls['username'].value)
        this.router.navigate(['/heroes'])
      },
      err => console.log(err)
    )
  }
}
