import { Injectable } from "@angular/core";
import { Hero } from "../entity/hero";
import { HEROES } from "../mock-heroes";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
// import resolve = Q.resolve;
/**
 * Created by geyao on 2017/5/11.
 */
@Injectable()
export class HeroService {
    // private hero: Hero;
    // private heroes: Hero[];

    // getHeroes(): Hero[] {
    //     if(this.heroes){
    //         return this.heroes;
    //     }
    //     return this.heroes = HEROES;
    //
    // }

    /*private getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES)
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()),100);
        })
    }

    getHero(number: number) :Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id == number));
    }*/

    constructor(private http:Http){}
    
    private heroesUrl = 'api/heroes';
    private id: number;
    private headers:Headers = new Headers({'content-type':'application/json'});

    
    private getHeroes() :Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise().then(res => {
                console.dir(res);
                return res.json().data as Hero[];
            }).catch(HeroService.handleError);
    }

    private static handleError(err: any) {
        console.error('An error occurred', err); // for demo purposes only
        return Promise.reject(err.message || err);
    }

    getHeroesSlowly() :Promise<Hero[]>{
        return new Promise(resolve => setTimeout(() => resolve(this.getHeroes()),100))
    }

    getHero(number:number) :Promise<Hero>{
        const url = `${this.heroesUrl}/${number}`;
        return this.http.get(url)
            .toPromise().then(res => {
                console.dir(res);
                return res.json().data as Hero;
            }).catch(HeroService.handleError);
    }

    update(hero: Hero) :Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise()
            .then(() => hero).catch(HeroService.handleError);
    }

    add(heroName: string) :Promise<Hero>{
        return this.http.post(this.heroesUrl,JSON.stringify({name:heroName}),{headers:this.headers})
                .toPromise().then(res => {
                    console.dir(res);
                    return res.json().data as Hero;
                }).catch(HeroService.handleError);
    }

    delete(param: {id: number}):Promise<void> {
        const url = `${this.heroesUrl}/${param}`;
        return this.http.delete(url,{headers:this.headers}).toPromise()
            .then(()=>null).catch(HeroService.handleError);
    }
}