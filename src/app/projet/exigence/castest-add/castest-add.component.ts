import { Component, OnInit } from '@angular/core';
import { PasDeTest } from '../../../../models/model.pasdetest';
import { Subject, BehaviorSubject } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-castest-add',
  templateUrl: './castest-add.component.html',
  styleUrls: ['./castest-add.component.css']
})
export class CastestAddComponent implements OnInit {

  etapes:Array<PasDeTest> = new Array<PasDeTest>();
  //etapeSubject: Subject<PasDeTest> = new BehaviorSubject<PasDeTest>(null);
  nbrEtape:number = 0;

  constructor() { 

  }

  ngOnInit() {
    //this.etapeSubject.subscribe(resp => this.etapes.push(resp));
  }

  onAddEtapeTest() {
    this.nbrEtape++;
    this.etapes.push(new PasDeTest());
  }

  onMinEtapeTest() {

  }

  onDeleteEtapeTest(index:number) {
    this.nbrEtape--;
    this.etapes.splice(index,index);
  }

  

}
