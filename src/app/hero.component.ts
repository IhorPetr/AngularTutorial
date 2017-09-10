import { Component,OnInit } from '@angular/core';
import  {Hero} from './Hero';
import {HeroService} from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl:'./hero.component.html',
  styleUrls:['./hero.component.css']
})
export class HeroesComponent implements OnInit
{
  private heroservice: HeroService;
  public selectedHero:Hero;
  public heroes: Hero[];

  public constructor(heroservice: HeroService, private router: Router)
  {
    this.heroservice=heroservice;
  }

  public onSelected(heros:Hero): void
  {
    this.selectedHero=heros;
  }

  public ngOnInit():void
  {
   this.heroservice.getHeroes().then(heroes=>this.heroes=heroes);
  }
  public gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
