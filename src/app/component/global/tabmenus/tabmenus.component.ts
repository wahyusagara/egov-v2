import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabmenus',
  templateUrl: './tabmenus.component.html',
  styleUrls: ['./tabmenus.component.scss'],
})
export class TabmenusComponent implements OnInit {
  item1 = [
    {
      img: "assets/img/group-interface-symbol.png",
      label: "Daftar Pegawai",
      class: "",
      route: "daftar-pegawai"
    },
    {
      img: "assets/img/timetable.png",
      label: "Kehadiran",
      class: "",
      route: "kehadiran"
    },
    {
      img: "assets/img/home-white.png",
      label: "",
      class: "enty",
      route: "home"
    },
    {
      img: "assets/img/startup.png",
      label: "Statistic",
      class: "",
      route: "maintenance"
    },
    {
      img: "assets/img/user.png",
      label: "Profile",
      class: "",
      route: "/profile"
    },
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
