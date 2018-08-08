import { Component, OnInit, Input } from '@angular/core';
import { ProjetsService } from '../../../services/projets.service';
import { Exigence } from '../../../models/model.exigence';
import { Router } from '../../../../node_modules/@angular/router';
import { ExigencesService } from '../../../services/exigences.service';

@Component({
  selector: 'app-projet-sidebar',
  templateUrl: './projet-sidebar.component.html',
  styleUrls: ['./projet-sidebar.component.css']
})
export class ProjetSidebarComponent implements OnInit {

  @Input() idProjet:number;
  
  //TODO : exigences must be array of type Exigence
  exigences:Array<Exigence>;
  nExigence:string=null;
  search:string="";

  add:number;

  constructor(private router:Router, private pService:ProjetsService, private eService:ExigencesService) { this.add = 0; }

  ngOnInit() {
    //this.getProjet();
    this.getExigences();
  }

  onAdd() {
    if(this.add == 0)
      this.add = 1;
    else
      this.add = 0;
  }

  added() {
    let exigence = new Exigence();
    exigence.nom = this.nExigence;
    this.exigences.push(exigence);
    this.nExigence="";
    this.eService.saveExigence(exigence,this.idProjet)
    .subscribe(data=>{
      console.log(data);
      this.goToExigence(this.idProjet,data.id);
    },err=>{
      console.log(JSON.parse(err._body).message);
    })
    
  }

  goToExigence(idProjet:number,idExigence:number){
    //this.router.navigate(['projet',idProjet,'exigences',idExigence]);
    console.log(idExigence)
    this.router.navigateByUrl('projet/'+idProjet+'/exigences/'+idExigence)
  }

 /* getProjet() {
    this.pService.getProjet(this.idProjet)
      .subscribe(data=>{
        this.projet = data;
      },err=>{
        console.log(err)
      })
  }
  */

  getExigences() {
    this.pService.getExigences(this.idProjet)
    .subscribe(data=>{
      this.exigences = data.content;
      console.log(this.exigences);
    },err=>{
      console.log(err);
    })
  }


  /*onKey(event:any){
    this.search +=  event.target.value;
    this.exigences.slice
  }*/

}
