import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendaraan',
  templateUrl: './kendaraan.page.html',
  styleUrls: ['./kendaraan.page.scss'],
})
export class KendaraanPage implements OnInit {
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

  ngOnInit() {
  }

}
