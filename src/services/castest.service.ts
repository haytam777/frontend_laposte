import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { CasTest } from "../models/model.castest";


@Injectable()
export class CasTestService{
    constructor(private http:Http){
    }

    getCtOfExigence(idExigence:number){
        return  this.http.get("http://localhost:8080/exigences/"+idExigence+"/castests")
            .pipe(map(resp => resp.json()));
    }

    addCasTest(casTest:CasTest, idExigence:number){
        return this.http.post("http://localhost:8080/exigences/"+idExigence+"/castests",casTest)
            .pipe(map(resp => resp.json()));
    }

    /*getExigences(id:number){
        return this.http.get("http://localhost:8080/projets/"+id+"/exigences")
            .pipe(map(resp=>resp.json()));
    }*/
}