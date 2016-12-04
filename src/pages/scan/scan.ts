import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeData } from "../home/home";
import { bookService } from "../../app/bookService";

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [bookService]
})
export class ScanPage {

  barcodeData: BarcodeData;
  bookData;
  errorMessage: string;
  i: number;

  constructor(private nav: NavController, navParams: NavParams, private bookService: bookService) {
    this.barcodeData = navParams.get('details');
    this.getBook();
  }

  getBook(){
    this.bookService.getBookData(this.barcodeData.text)
      .subscribe(
        bookData => this.bookData = bookData,
        error => this.errorMessage = <any>error
      );
  }



}
