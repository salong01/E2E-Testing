import { Component, OnInit } from '@angular/core';
import { Hero } from '../services/heroes';
import { TokenAuthService } from '../services/token-auth.service';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  user: string;
  constructor(private heroService: HeroService, private tokenService: TokenAuthService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(res => this.heroes = res);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
