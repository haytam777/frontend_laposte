import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { filter } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  idProjet:number;
  idExigence:number;
  action:string = null;

  constructor(private activatedRoute:ActivatedRoute){
    this.idProjet = activatedRoute.snapshot.params['id'];
    this.idExigence = activatedRoute.snapshot.params['idExigence'];
    this.getParam();
  }

  ngOnInit() {
  }

  getParam(){
    this.activatedRoute.queryParams
    .pipe(filter(params=>params.action))
      .subscribe(params=>{
        this.action=params.action;
      })
  }

}
