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
      label: "Daftar Kepegawaian",
      route: "daftar-pegawai"
    },
    {
      img: "assets/img/timetable.png",
      label: "Kehadiran",
      route: "kehadiran"
    },
    {
      img: "assets/img/avatar.png",
      label: "Kendaraan",
      route: "entri-data"
    },
    {
      img: "assets/img/startup.png",
      label: "Ruang Rapat",
      route: "/ruang-rapat"
    },
    {
      img: "assets/img/user.png",
      label: "Ruang Rapat",
      route: "/profile"
    },
  ]

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}
  navPage(url) {
    console.log(url);
    this.navCtrl.navigateForward(url);
  }
}
