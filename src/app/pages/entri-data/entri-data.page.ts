import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entri-data',
  templateUrl: './entri-data.page.html',
  styleUrls: ['./entri-data.page.scss'],
})
export class EntriDataPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

}
