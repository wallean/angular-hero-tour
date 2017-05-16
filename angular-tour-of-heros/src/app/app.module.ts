import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesComponent }  from './component/heroesComponent/heroes.component';
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./component/heroDetailComponent/hero-detail.component";
import { AppComponent } from "./component/appComponent/app.component";
import { HeroService } from "./service/hero.service";
import { DashboardComponent } from "./component/dashboardComponent/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./service/in-memory-data.service";
import { HeroSearchService } from "./service/hero-search.service";
import { HeroSearchComponent } from "./component/heroSearchComponent/hero-search.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
        ,
        HeroSearchComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HeroService
        ,
        HeroSearchService
    ]
})
export class AppModule {

}
