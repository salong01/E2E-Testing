import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  constructor(private registerFormBuilder: FormBuilder) {
    this.createForm();
  }

  registerForm = new FormGroup ({ username: new FormControl(), email: new FormControl(), gender: new FormControl(), password: new FormControl(), confirmPassword: new FormControl()});

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm = this.registerFormBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      gender: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  
}
