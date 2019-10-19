import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-helpdesk-kepegawaian',
  templateUrl: './helpdesk-kepegawaian.page.html',
  styleUrls: ['./helpdesk-kepegawaian.page.scss'],
})
export class HelpdeskKepegawaianPage implements OnInit {
  date = new Date();
  hari = [
    'Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  createLogBook(){
    this.navCtrl.navigateForward('form-dummy');
  }

}
