import { Component, OnInit, Input } from '@angular/core';
import { Exigence } from '../../../models/model.exigence';
import { ExigencesService } from '../../../services/exigences.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Campagne } from '../../../models/model.campagne';
import { CampagnesService } from '../../../services/campagnes.service';
import { CasTestService } from '../../../services/castest.service';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-exigence',
  templateUrl: './exigence.component.html',
  styleUrls: ['./exigence.component.css']
})
export class ExigenceComponent implements OnInit {

  idProjet:number;
  idExigence:number;
  campagnes:Array<Campagne>;
  casTests:Array<Campagne>;

  exigence:Exigence;

  private sub:any;


  constructor(
    private eService:ExigencesService,
    private pService:CampagnesService,
    private ctService:CasTestService, 
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) {
    
   }

  ngOnInit() {
    /*this.idProjet = this.activatedRoute.snapshot.params['id'];
    this.idExigence = this.activatedRoute.snapshot.params['idExigence'];*/
    
    this.activatedRoute.params.subscribe(params=>{
      
      this.idExigence = params.idExigence;
      this.idProjet = params.id;
      this.getExigence();
      this.getCampagnes();
      this.getCasTests();
    })
    
    
  }

  getExigence(){
    this.eService.getExigence(this.idExigence)
      .subscribe(data=>{
        this.exigence = data;
        console.log(data.nom)
      },err=>{
        console.log(err);
      })
  }

  getCampagnes() {
    this.pService.getCampagnesOfExigence(this.idExigence)
      .subscribe(data=>{
        this.campagnes = data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }

  getCasTests(){
    this.ctService.getCtOfExigence(this.idExigence)
    .subscribe(data=>{
      this.casTests = data;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

  onAddedCt(){
    //this.router.navigate(['exigences',this.idExigence,'castests'],{queryParams:{ action:'add'}});
    this.router.navigateByUrl('exigences/'+this.idExigence+'/castests?action=add')
  }

  onAddedCampagne(){
    
  }

}
