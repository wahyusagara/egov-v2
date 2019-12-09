import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})

export class MaintenancePage implements OnInit {
  text:any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds",
    MilliSeconds: "MilliSeconds"
  };
  
  constructor() { }

  ngOnInit() {
  }
  onEvent($event): void {
    let timeLeft = $event.left;
  }
}
