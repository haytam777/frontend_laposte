import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Projet } from "../models/model.projet";


@Injectable()
export class CampagnesService{
    constructor(private http:Http){
    }
    getCampagnes(motCle:string,page:number,size:number){
        return  this.http.get("http://localhost:8080/chercherProjets?mc="+motCle+"&size="+size+"&page="+page)
            .pipe(map(resp => resp.json()));
    }

    getCampagne(id:number){
        return  this.http.get("http://localhost:8080/projets/"+id)
            .pipe(map(resp => resp.json()));
    }

    saveCampagne(projet:Projet){
        return this.http.post("http://localhost:8080/projets",projet)
            .pipe(map(resp => resp.json()));
    }

    udpateCampagne(projet:Projet){
        return this.http.put("http://localhost:8080/projets/"+projet.id,projet)
            .pipe(map(resp => resp.json()));
    }

    getCampagnesOfExigence(idExigence:number){
        return this.http.get("http://localhost:8080/exigences/"+idExigence+"/campagnes")
            .pipe(map(resp => resp.json()));
    }

    /*getExigences(id:number){
        return this.http.get("http://localhost:8080/projets/"+id+"/exigences")
            .pipe(map(resp=>resp.json()));
    }*/
}