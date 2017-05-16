/**
 * Created by geyao on 2017/5/12.
 */
import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../service/hero.service";
import { Hero } from "../../entity/hero";

@Component({
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    private heroes: Hero[];
    ngOnInit(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1,5));
    }
    constructor(private heroService:HeroService){}
}