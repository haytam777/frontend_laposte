import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Projet } from "../models/model.projet";


@Injectable()
export class ProjetsService{
    constructor(private http:Http){
    }
    getProjets(motCle:string,page:number,size:number){
        return  this.http.get("http://localhost:8080/chercherProjets?mc="+motCle+"&size="+size+"&page="+page)
            .pipe(map(resp => resp.json()));
    }

    getProjet(id:number){
        return  this.http.get("http://localhost:8080/projets/"+id)
            .pipe(map(resp => resp.json()));
    }

    saveProjet(projet:Projet){
        return this.http.post("http://localhost:8080/projets",projet)
            .pipe(map(resp => resp.json()));
    }

    updateProjet(projet:Projet){
        return this.http.put("http://localhost:8080/projets/"+projet.id,projet)
            .pipe(map(resp => resp.json()));
    }

    getExigences(id:number){
        return this.http.get("http://localhost:8080/projets/"+id+"/exigences")
            .pipe(map(resp=>resp.json()));
    }
}