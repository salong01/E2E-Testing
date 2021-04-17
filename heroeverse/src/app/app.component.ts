import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroe Verse';
  user: String;

  @ViewChild(LoginComponent) child;

  // ngAfterViewInit() {
  //   this.user = this.child.user
  // }
}
