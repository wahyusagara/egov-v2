import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-kendaraan',
  templateUrl: './list-kendaraan.component.html',
  styleUrls: ['./list-kendaraan.component.scss'],
})
export class ListKendaraanComponent implements OnInit {
  listKendaraan = [
    {
      nopol: "B 1234 AA",
      disabled: false
    },
    {
      nopol: "B 2345 AA",
      disabled: true
    },
    {
      nopol: "B 3456 AA",
      disabled: false
    }
  ]

  constructor() { }

  ngOnInit() {}

}
