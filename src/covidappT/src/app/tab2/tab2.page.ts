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
  users:any[]=[];

  constructor(public platform: Platform) {
    this.platform.ready().then(()=>{
    this.users = [
      {
        id: 1,
        first: 'Alice',
        last: 'Smith',
      },
      {
        id: 2,
        first: 'Bob',
        last: 'Davis',
      },
      {
        id: 3,
        first: 'Charlie',
        last: 'Rosenburg',
      }
    ];})


  }

  optionsSingle: CalendarComponentOptions = {
    color: 'danger',
    pickMode: 'multi'
  };

  onChange($event) {
    console.log($event);
  };


  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };


  sick = "Healthy";
  sick_color = "secondary";
  optionsFn() {
    console.log(this.users);
    // if (this.users == 'Charlie Rosenburg') {
    //   this.sick = "Out Sick";
    //   this.sick_color = "danger";
    // }
  }
  
  // compareWith = compareWithFn;
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
