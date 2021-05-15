import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../services/heroes';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { TokenAuthService } from '../services/token-auth.service';
import { UserHero } from '../services/user-hero';
import { UserHeroesService } from '../services/user-heroes.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroName: string;
  hero: Hero;
  userHero: UserHero = new UserHero();
  userHeroes: UserHero[];
  isHeroSaved: boolean;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private tokenService: TokenAuthService, private userHeroService:UserHeroesService) { }

  ngOnInit(): void {
    this.heroName = this.route.snapshot.paramMap.get('name');
    this.getHero();
    this.getUserHeroes();
  }

  getHero(): void {
    this.heroService.getHero(this.heroName)
      .subscribe(hero => this.hero = hero);
  }

  isHeroInUserList(): void {
    for(let hero of this.userHeroes){
      if(hero.hero===this.heroName){
        this.isHeroSaved = true;
        return;
      }else{
        this.isHeroSaved = false;
      }
    }
  }

  getUserHeroes(): void {
    const user = this.tokenService.getUser();
    this.userHeroService.getUserHeroes(user)
    .subscribe(
      heroes => this.userHeroes = heroes
    )
  }

  addOrRemoveHeroUser(): void {
    this.userHero.hero = this.hero.name
    this.userHero.username = this.tokenService.getUser()
    this.isHeroInUserList();
    if(this.isHeroSaved===false){
      this.heroService.addUserHero(this.userHero)
      .subscribe(
        res => {
          console.log("Hero saved")
        },
        err => console.log(err)
      )
    }else {
      console.log(this.userHero);
      this.heroService.removeUserHero(this.userHero)
      .subscribe(
        res => {
          console.log("Hero deleted")
        },err => console.log(err)
      )
    }
  }
}
