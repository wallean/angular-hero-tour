import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Hero } from "../entity/hero";
/**
 * Created by geyao on 2017/5/16.
 */
@Injectable()
export class HeroSearchService{
    constructor(private http:Http){}

    search(kw:string):Observable<Hero[]>{
        return this.http.get(`api/heroes?name=${kw}`)
            .map(res => res.json().data as Hero[]);
    }
}