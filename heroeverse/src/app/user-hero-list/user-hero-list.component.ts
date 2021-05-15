import { Component, OnInit } from '@angular/core';

import { UserHeroesService } from '../services/user-heroes.service';
import { TokenAuthService } from '../services/token-auth.service';
import { UserHero } from '../services/user-hero';

@Component({
  selector: 'app-user-hero-list',
  templateUrl: './user-hero-list.component.html',
  styleUrls: ['./user-hero-list.component.css']
})

export class UserHeroListComponent implements OnInit {

  userHeroes: UserHero[];
  user: string;

  constructor(private userHeroesService: UserHeroesService, private tokenService: TokenAuthService) {}

  getUserHeroes(user): void {
    this.userHeroesService.getUserHeroes(user)
      .subscribe(res => this.userHeroes = res);
  }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.getUserHeroes(this.user);
  }
}
