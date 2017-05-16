"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// import resolve = Q.resolve;
/**
 * Created by geyao on 2017/5/11.
 */
var HeroService = HeroService_1 = (function () {
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
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes';
        this.headers = new http_1.Headers({ 'content-type': 'application/json' });
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise().then(function (res) {
            console.dir(res);
            return res.json().data;
        }).catch(HeroService_1.handleError);
    };
    HeroService.handleError = function (err) {
        console.error('An error occurred', err); // for demo purposes only
        return Promise.reject(err.message || err);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(_this.getHeroes()); }, 100); });
    };
    HeroService.prototype.getHero = function (number) {
        var url = this.heroesUrl + "/" + number;
        return this.http.get(url)
            .toPromise().then(function (res) {
            console.dir(res);
            return res.json().data;
        }).catch(HeroService_1.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers }).toPromise()
            .then(function () { return hero; }).catch(HeroService_1.handleError);
    };
    HeroService.prototype.add = function (heroName) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
            .toPromise().then(function (res) {
            console.dir(res);
            return res.json().data;
        }).catch(HeroService_1.handleError);
    };
    HeroService.prototype.delete = function (param) {
        var url = this.heroesUrl + "/" + param;
        return this.http.delete(url, { headers: this.headers }).toPromise()
            .then(function () { return null; }).catch(HeroService_1.handleError);
    };
    return HeroService;
}());
HeroService = HeroService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
var HeroService_1;
//# sourceMappingURL=hero.service.js.map