import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {BarcodeData} from "../home/home";

@Component({
  selector: 'page-can',
  templateUrl: 'scan.html'
})
export class ScanPage {

  barcodeData: BarcodeData;

  constructor(private nav: NavController, navParams: NavParams) {
    this.barcodeData = navParams.get('details');
  }

}
