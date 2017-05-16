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
var router_1 = require("@angular/router");
var hero_service_1 = require("../../service/hero.service");
var HeroesComponent = (function () {
    // get Heroes from a data service
    // 'new' will create a new instance every time , it's not good when you need to cache data in you service
    // heroes:Hero[] = new HeroService().getHeroes();
    // below is a better solution
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        // this.getHeroes(); // not recommended as constructor is not supposed to deal with complex logic
    }
    // lifecycle method :initialize the component after angular first displays the data-bind properties
    // and sets the component's input properties
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (data) {
            _this.heroes = data;
        }, function (err) {
            console.log(err);
        });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.goToDetail = function () {
        this.router.navigate(['./detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (heroName) {
        var _this = this;
        heroName = heroName.trim();
        if (!heroName)
            return;
        this.heroService.add(heroName).then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
            return console.log('新增成功');
        }, function (err) { return console.log(err); });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete({ id: hero.id })
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero == hero)
                _this.selectedHero = null;
        }, function (err) { return console.log(err); });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map