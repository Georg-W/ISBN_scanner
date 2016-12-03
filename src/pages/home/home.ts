import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {BarcodeScanner} from "ionic-native";
import {ScanPage} from "../scan/scan";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  click() {
    BarcodeScanner.scan()
      .then((result) => {
        if (!result.cancelled) {
          const barcodeData = new BarcodeData(result.text, result.format);
          this.scanDetails(barcodeData);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  scanDetails(details) {
    console.log(details);
    this.navCtrl.push(ScanPage, {details: details});
  }

}

export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {}

}
