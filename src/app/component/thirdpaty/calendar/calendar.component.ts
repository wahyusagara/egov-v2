import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  dateku = "2019-11-17";
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    // from: new Date(new Date().toISOString()).setDate(1),
    from: new Date(1),
    weekStart: 1,
    color: "danger"
  };
  dateMulti : string[] = [
    "2019-11-15",
    "2019-11-17",
    "2019-11-19"
  ];

  constructor() { }

  ngOnInit() {}

}
