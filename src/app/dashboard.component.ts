/**
 * Created by Igor on 03.09.2017.
 */
import { Component,OnInit } from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}