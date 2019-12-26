import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image = 'assets/img/profile.png';
  dataProfile = {
    nama: "App Egov",
    hp: "08987654321",
    email: "appegov@gmail.com",
    alamat: "Avenue 2nd Street No. 29",
    ttl: "1995-11-10"
  }

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  change(event) {
    // console.log(event.target.value);
  }
  logout() {
    this.navCtrl.navigateRoot('login')
  }

}
