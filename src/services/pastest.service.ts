import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Exigence } from "../models/model.exigence";
import { PasDeTest } from "../models/model.pasdetest";



@Injectable()
export class PasTestService{
    constructor(private http:Http){
    }

    savePasTest(pt:PasDeTest, idCasTest:number){
        return this.http.post("http://localhost:8080/castests/"+idCasTest+"/pastests",pt)
            .pipe(map(resp => resp.json()));
    }

    /*getExigence(idExigence:number){
        return  this.http.get("http://localhost:8080/exigences/"+idExigence)
        .pipe(map(resp => resp.json()));
    }*/

}