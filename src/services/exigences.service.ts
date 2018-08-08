import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Exigence } from "../models/model.exigence";
import { Projet } from "../models/model.projet";


@Injectable()
export class ExigencesService{
    constructor(private http:Http){
    }

    saveExigence(exigence:Exigence, idProjet:number){
        return this.http.post("http://localhost:8080/projets/"+idProjet+"/exigences",exigence)
            .pipe(map(resp => resp.json()));
    }

    getExigence(idExigence:number){
        return  this.http.get("http://localhost:8080/exigences/"+idExigence)
        .pipe(map(resp => resp.json()));
    }

}