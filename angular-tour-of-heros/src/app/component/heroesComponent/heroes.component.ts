import { Component, OnInit } from '@angular/core';
import { Hero } from "../../entity/hero";

import { Router } from "@angular/router";
import { HeroService } from "../../service/hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
    // ,
    // providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    // lifecycle method :initialize the component after angular first displays the data-bind properties
    // and sets the component's input properties
    ngOnInit(): void {
        this.getHeroes()
    }

    // get Heroes from a data service

    // 'new' will create a new instance every time , it's not good when you need to cache data in you service
    // heroes:Hero[] = new HeroService().getHeroes();
    // below is a better solution
    constructor(
        private heroService: HeroService,
        private router:Router
    ) {
        // this.getHeroes(); // not recommended as constructor is not supposed to deal with complex logic
    };

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(data => {
            this.heroes = data
        }, err => {
            console.log(err)
        });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    goToDetail(){
        this.router.navigate(['./detail',this.selectedHero.id]);
    }

    add(heroName:string){
        heroName = heroName.trim();
        if(!heroName) return;
        this.heroService.add(heroName).then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
            return console.log('新增成功');
        }, err => console.log(err));
    }

    delete(hero:Hero) :void{
        this.heroService.delete({id:hero.id})
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero == hero) this.selectedHero = null;
            },err => console.log(err));
    }
}
