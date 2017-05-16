import { Component, OnInit } from "@angular/core";
import { Hero } from "../../entity/hero";
import { HeroSearchService } from "../../service/hero-search.service";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
/**
 * Created by geyao on 2017/5/16.
 */

@Component({
    selector:'hero-search',
    templateUrl:'./hero-search.component.html',
    styleUrls:['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit{
    ngOnInit(): void {
        this.heroes = this.searchTerm
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(term => term? this.heroSearchService.search(term as string): Observable.of<Hero[]>([]))
                        .catch(err => {
                            console.log(err);
                            return Observable.of<Hero[]>([]);
                        });
    }

    private searchTerm = new Subject();

    constructor(
        private heroSearchService:HeroSearchService,
        private router:Router
    ){}

    private heroes:Observable<Hero[]>;

    goToDetail(hero:Hero){
        this.router.navigate(['./detail',hero.id])
    }

    search(kw:string):void{
        this.searchTerm.next(kw);
    }
}
