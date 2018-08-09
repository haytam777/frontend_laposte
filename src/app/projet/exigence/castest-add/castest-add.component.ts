import { Component, OnInit } from '@angular/core';
import { PasDeTest } from '../../../../models/model.pasdetest';
import { Subject, BehaviorSubject } from '../../../../../node_modules/rxjs';
import { CasTestService } from '../../../../services/castest.service';
import { PasTestService } from '../../../../services/pastest.service';
import { CasTest } from '../../../../models/model.castest';

@Component({
  selector: 'app-castest-add',
  templateUrl: './castest-add.component.html',
  styleUrls: ['./castest-add.component.css']
})
export class CastestAddComponent implements OnInit {

  etapes:Array<PasDeTest> = new Array<PasDeTest>();
  //etapeSubject: Subject<PasDeTest> = new BehaviorSubject<PasDeTest>(null);
  nbrEtape:number = 0;

  constructor(private ctService:CasTestService, private pdtService:PasTestService) { }

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

  onSaveCasTest(formdata){
    let ct = new CasTest();
    ct.nom = formdata.nom;
    ct.description = formdata.description;
    this.ctService.addCasTest(ct,1)
      .subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err)
      })

      for(let i =0; i <this.nbrEtape; i++ ){
        this.etapes[i].nom = formdata['nomEtape'+i]
        this.etapes[i].instruction = formdata['instructionEtape'+i]
        //this.pdtService.savePasTest(this.etapes[i],)
      }
    
    console.log(this.etapes);
    
    console.log(formdata)
  }

  

}
