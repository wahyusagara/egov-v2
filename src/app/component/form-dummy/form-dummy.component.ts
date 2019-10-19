import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-dummy',
  templateUrl: './form-dummy.component.html',
  styleUrls: ['./form-dummy.component.scss'],
})
export class FormDummyComponent implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  submit() {
    this.navCtrl.back({
      animated: true
    });
  }

}
