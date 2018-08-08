import { Component, OnInit } from '@angular/core';
import { Exigence } from '../../models/model.exigence';

@Component({
  selector: 'app-exigences',
  templateUrl: './exigences.component.html',
  styleUrls: ['./exigences.component.css']
})
export class ExigencesComponent implements OnInit {

  Exigences:Array<Exigence>;

  constructor() { }

  ngOnInit() {
    
  }

}
