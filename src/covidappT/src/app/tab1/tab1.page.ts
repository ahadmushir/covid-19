import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}


  text = "to be changed!";

  onChngClick() {
    console.log("hit!")
    this.text = "changed!!";
  }
}
