import { Component } from '@angular/core';
import { TokenAuthService } from './services/token-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroe Verse';

  constructor(public tokenAuthService: TokenAuthService) {}

}
