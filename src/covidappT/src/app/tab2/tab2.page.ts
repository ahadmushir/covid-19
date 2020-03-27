import { Component } from '@angular/core';
import { CalendarModule, CalendarComponentOptions } from 'ion2-calendar';
// import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(public platform: Platform) {}

  optionsSingle: CalendarComponentOptions = {
    color: 'danger',
    pickMode: 'multi'
  };

  onChange($event) {
    console.log($event);
  };
  // Date Range
  // dateRange: { from: string; to: string; };
  // type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range',
  //   color: 'danger'
  // };

  // dateMulti: string[];
  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi',
  //   color: 'danger'
  // };

 
  

}
