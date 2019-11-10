import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss'],
})
export class ListProfileComponent implements OnInit {
  image = 'assets/img/profile.png';
  dataProfile = {
    nama: "App Egov",
    hp: "08987654321",
    email: "appegov@gmail.com",
    alamat: "Avenue 2nd Street No. 29",
    ttl: "1995-11-10"
  };

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}
  logout() {
    this.navCtrl.navigateRoot('login');
  }

}
