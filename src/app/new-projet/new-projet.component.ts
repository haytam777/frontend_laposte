import { Component, OnInit } from '@angular/core';
import { Projet } from '../../models/model.projet'
import { ProjetsService } from '../../services/projets.service';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {

projet:Projet = new Projet();

  constructor(private pServ:ProjetsService) { }

  ngOnInit() {
  }

  saveProjet() {
    this.pServ.saveProjet(this.projet)
      .subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
  }

}
