import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../services/projets.service';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {

  constructor(private pService:ProjetsService) { }

  ngOnInit() {
  }
  
  onSaveProjet(dataForm){
    this.pService.saveProjet(dataForm)
      .subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(JSON.parse(err._body).message);
      })
  }

}
