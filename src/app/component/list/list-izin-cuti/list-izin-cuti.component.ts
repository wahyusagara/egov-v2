import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-izin-cuti',
  templateUrl: './list-izin-cuti.component.html',
  styleUrls: ['./list-izin-cuti.component.scss'],
})
export class ListIzinCutiComponent implements OnInit {
  listCuti = [
    {
      approved: true,
      date: "2019-10-19T01:24:21.604Z",
      duration: 1,
      title: "Izin ke Kantor Samsat"
    },
    {
      approved: false,
      date: "2019-10-25T01:24:21.604Z",
      duration: 4,
      title: "Cuti acara keluarga"
    }
  ]

  constructor() { }

  ngOnInit() {}

}
