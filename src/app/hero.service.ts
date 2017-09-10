/**
 * Created by Igor on 03.09.2017.
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import {HEROES} from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService
{
    //Work with Stubs
 /*   public getHeroes():Promise<Hero[]>
    {
        return Promise.resolve(HEROES);
    }
    public getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    public getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }*/

    //Work with Local Storege
    private heroesUrl='api/heroes';
    public constructor(private http: Http){}
    public getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    public getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    private headers = new Headers({'Content-Type': 'application/json'});

    public  update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    public create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }
   public delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}