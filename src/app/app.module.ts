import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroesComponent }  from './hero.component';
import {HeroDetailComponent} from './hero-detail.component';
import { AppComponent }        from './app.component';
import { HeroService }         from './hero.service';
import  {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './hero-search.component';
import {HeroSearchService} from './hero-search.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
