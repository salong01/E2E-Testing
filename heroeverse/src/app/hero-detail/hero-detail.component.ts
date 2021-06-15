import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../services/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { TokenAuthService } from '../services/token-auth.service';
import { UserHero } from '../services/user-hero';
import { UserHeroesService } from '../services/user-heroes.service';
import { Location } from '@angular/common'
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

  constructor(private route: ActivatedRoute, private heroService: HeroService, private tokenAuthService: TokenAuthService, private userHeroService:UserHeroesService, private location: Location) { }

  ngOnInit(): void {
    this.heroName = this.route.snapshot.paramMap.get('name');
    this.getHero();
    if(!(this.tokenAuthService.getUser()==''))
      this.getUserHeroes();
  }

  getHero(): void {
    this.heroService.getHero(this.heroName)
      .subscribe(hero => this.hero = hero);
  }

  getUserHeroes(): void {
    const user = this.tokenAuthService.getUser();
    this.userHeroService.getUserHeroes(user)
    .subscribe(
      heroes => {
        if(heroes.length==0)
          this.isHeroSaved=false;
        else 
          for(let hero of heroes){
            if(hero.hero===this.heroName){
              this.isHeroSaved = true;
              return;
            }else
              this.isHeroSaved = false;
          }
        
      }
    )
  }

  addHero(): void {
    this.userHero.hero = this.hero.name;
    this.userHero.username = this.tokenAuthService.getUser();
    this.heroService.addUserHero(this.userHero)
      .subscribe(
        res => {
          console.log("Hero saved to " + this.userHero.username + "list") 
          this.isHeroSaved = true
        },
        err => console.log(err)
      )
  }

  removeHero(): void{
    this.userHero.hero = this.hero.name;
    this.userHero.username = this.tokenAuthService.getUser();
    this.heroService.removeUserHero(this.userHero)
      .subscribe(
        res => {
          console.log("Hero deleted from " + this.userHero.username + "list")
          this.isHeroSaved = false
        },
        err => console.log(err)
      )
  }

  goBack(): void {
    this.location.back()
  }
}
