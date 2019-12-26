import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {
  item1 = [
    {
      img: "assets/img/izin.png",
      label: "Izin / Cuti",
      route: "izin-cuti"
    },
    {
      img: "assets/img/perjalanan dinas.png",
      label: "Perjalanan Dinas",
      route: "perjalanan-dinas"
    },
    {
      img: "assets/img/JDIH.png",
      label: "Kinerja",
      route: "maintenance"
    },
    {
      img: "assets/img/kendaraan.png",
      label: "Kendaraan",
      route: "maintenance"
    },
    {
      img: "assets/img/ruang rapat.png",
      label: "Ruang Rapat",
      route: "maintenance"
    },
    {
      img: "assets/img/persuratan.png",
      label: "Persuratan",
      route: "maintenance"
    },
    {
      img: "assets/img/helpdesk kepegawaian.png",
      label: "Helpdesk Kepegawaian",
      route: "maintenance"
    },
    {
      img: "assets/img/lain nya.png",
      label: "Menu Lain",
      route: "/menu-lain"
    }
  ]

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}
  navPage(url) {
    // console.log(url);
    this.navCtrl.navigateForward(url);
  }

}
