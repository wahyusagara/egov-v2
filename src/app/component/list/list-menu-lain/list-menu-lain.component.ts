import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-menu-lain',
  templateUrl: './list-menu-lain.component.html',
  styleUrls: ['./list-menu-lain.component.scss'],
})
export class ListMenuLainComponent implements OnInit {
  listMenu = [
    {
      name: "Log Book",
      color: "green",
      img: "assets/img/logbook.png",
      url: "maintenance"
    },
    {
      name: "Peralatan",
      color: "red",
      img: "assets/img/peralatan.png",
      url: "maintenance"
    }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  navPage(url) {
    this.navCtrl.navigateForward(url);
  }

}
