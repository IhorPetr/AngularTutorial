import { Component,OnInit } from '@angular/core';
import  {Hero} from './Hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit
{
  private heroservice: HeroService;
  public selectedHero:Hero;
  public heroes: Hero[];

  public constructor(heroservice: HeroService)
  {
    this.heroservice=heroservice;
  }

  public onSelected(heros:Hero): void
  {
    this.selectedHero=heros;
  }

  public ngOnInit():void
  {
   this.heroservice.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }
}
