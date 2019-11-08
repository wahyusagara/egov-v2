import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {
  item1 = [
    {
      img: "assets/img/notepad.png",
      label: "Izin / Cuti",
      route: "izin-cuti"
    },
    {
      img: "assets/img/business-trip.png",
      label: "Perjanalan Dinas",
      route: "perjalanan-dinas"
    },
    {
      img: "assets/img/performance.png",
      label: "Kinerja",
      route: "home"
    },
    {
      img: "assets/img/flight.png",
      label: "Kendaraan",
      route: "/kendaraan"
    },
    {
      img: "assets/img/partners.png",
      label: "Ruang Rapat",
      route: "/ruang-rapat"
    },
    {
      img: "assets/img/email.png",
      label: "Persuratan",
      route: "home"
    },
    {
      img: "assets/img/performances.png",
      label: "Helpdesk Kepegawaian",
      route: "/helpdesk-kepegawaian"
    },
    {
      img: "assets/img/menu.png",
      label: "Menu Lain",
      route: "/menu-lain"
    }
  ]

  constructor() { }

  ngOnInit() {}

}
