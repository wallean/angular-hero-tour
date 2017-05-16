import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./component/heroesComponent/heroes.component";
import { HeroDetailComponent } from "./component/heroDetailComponent/hero-detail.component";
import { DashboardComponent } from "./component/dashboardComponent/dashboard.component";
import { NgModule } from "@angular/core";
/**
 * Created by geyao on 2017/5/12.
 */
const routes:Routes = [{
    path: 'heroes',
    component: HeroesComponent
}, {
    path: 'detail/:id',
    component: HeroDetailComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
}];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{ }