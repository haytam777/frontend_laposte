import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../../services/projets.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projetsTab:any;
  motCle:string ="";
  currentPage:number = 0;
  size:number = 4;
  pages:Array<number>;

  constructor(private pServ: ProjetsService, private router:Router) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.pServ.getProjets(this.motCle,this.currentPage,this.size)
      .subscribe(data => {
          this.projetsTab = data;
          this.pages = new Array(data.totalPages);
        },err => {
          console.log(err);
        })
  }

  chercher() {
    this.doSearch();
  }

  goToPage(i:number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditProjet(id:number){
    this.router.navigate(['edit-projet',id])
  }

  onGoToProjet(id:number){
    this.router.navigate(['projet',id])
  }

}
