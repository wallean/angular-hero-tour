import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../entity/hero";
import { ActivatedRoute, Params } from "@angular/router";
import { HeroService } from "../../service/hero.service";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";


/**
 * Created by geyao on 2017/5/10.
 */

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})
export class  HeroDetailComponent implements OnInit{
    private hero: Hero;
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    // @Input() hero :Hero;
    constructor(
        private route:ActivatedRoute,
        private heroService:HeroService,
        private location:Location
    ){}

    goBack(){
        this.location.back();
    }

    save() :void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
