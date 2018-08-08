import { Component, OnInit } from '@angular/core';
import { Projet } from '../../models/model.projet';
import { ActivatedRoute } from '@angular/router';
import { ProjetsService } from '../../services/projets.service';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.css']
})
export class EditProjetComponent implements OnInit {

  mode:number=1;
  projet:Projet = new Projet();
  idProjet:number;

  constructor(private activatedRoute:ActivatedRoute, private pService:ProjetsService) {
    console.log(activatedRoute.snapshot.params['id']);
    this.idProjet = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.pService.getProjet(this.idProjet)
      .subscribe(data=>{
        this.projet = data;
      },err=>{
        console.log(err);
      })
  }

  updateProjet() {
    this.pService.updateProjet(this.projet)
      .subscribe(data=>{
        console.log(data);
        alert("mise a jour")
      },err =>{
        console.log(err)
        alert("pb")
      })
  }

}
