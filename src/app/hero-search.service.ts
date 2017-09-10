/**
 * Created by Igor on 11.09.2017.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

    public constructor(private http: Http) {}

    public search(term: string): Observable<Hero[]> {
        return this.http
            .get(`api/heroes/?name=${term}`)
            .map(response => response.json().data as Hero[]);
    }
}
