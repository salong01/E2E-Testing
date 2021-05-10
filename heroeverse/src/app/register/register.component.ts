import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenAuthService } from '../services/token-auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hideConfirm = true;

  constructor(private registerFormBuilder: FormBuilder, private userService: UsersService, private tokenService: TokenAuthService, private router: Router) {
    this.createForm();
  }

  registerForm = new FormGroup ({ username: new FormControl(), email: new FormControl(), password: new FormControl(), confirmPassword: new FormControl()});

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm = this.registerFormBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  register(){
    this.userService.register(this.registerForm.value)
      .subscribe(
        res => {
        this.tokenService.saveToken(res.token)
        this.tokenService.saveUser(this.registerForm.controls['username'].value)
        this.router.navigate(['/heroes'])
      },
      err => console.log(err)
    )
  }  
}
