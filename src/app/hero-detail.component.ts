/**
 * Created by Igor on 03.09.2017.
 */
import {Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import {Hero} from './Hero';
import 'rxjs/add/operator/switchMap';

@Component(
    {
        selector:'hero-detail',
        templateUrl:'./hero-detail.component.html',
        styleUrls:['./hero-detail.component.css']
    }
)
export class HeroDetailComponent implements OnInit
{
      @Input() hero:Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    public ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    public goBack(): void {
        this.location.back();
    }
    public save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
