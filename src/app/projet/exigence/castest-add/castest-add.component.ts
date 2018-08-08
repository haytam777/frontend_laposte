import { Component, OnInit } from '@angular/core';
import { PasDeTest } from '../../../../models/model.pasdetest';

@Component({
  selector: 'app-castest-add',
  templateUrl: './castest-add.component.html',
  styleUrls: ['./castest-add.component.css']
})
export class CastestAddComponent implements OnInit {

  etapes:Array<PasDeTest>;
  constructor() { }

  ngOnInit() {
  }

}
