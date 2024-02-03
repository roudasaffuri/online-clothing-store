import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],

})

export class BagComponent  {

  numberOfItems: number = 0;

  constructor(public  recordsService: RecordsService) {}
  // dipendency injectionngcd
}