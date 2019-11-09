import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-menu-lain',
  templateUrl: './list-menu-lain.component.html',
  styleUrls: ['./list-menu-lain.component.scss'],
})
export class ListMenuLainComponent implements OnInit {
  listMenu = [
    {
      name: "Izin / Cuti",
      color: "green",
      img: "assets/img/avatar.png"
    },
    {
      name: "Izin / Cuti",
      color: "red",
      img: "assets/img/avatar.png"
    },
    {
      name: "Izin / Cuti",
      color: "blue",
      img: "assets/img/avatar.png"
    },
    {
      name: "Izin / Cuti",
      color: "purple",
      img: "assets/img/avatar.png"
    }
  ];
  listRow = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {}

}
