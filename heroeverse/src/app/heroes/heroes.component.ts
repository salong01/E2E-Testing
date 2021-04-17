import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/heroes';
import { HeroService } from '../shared/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(response => this.heroes = response);
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
  
  ngOnInit(): void {
    this.getHeroes();
  }

}
