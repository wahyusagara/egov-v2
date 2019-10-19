import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-izin-cuti',
  templateUrl: './izin-cuti.page.html',
  styleUrls: ['./izin-cuti.page.scss'],
})
export class IzinCutiPage implements OnInit {
  listCuti = [
    {
      approved: true,
      date: "2019-10-19T01:24:21.604Z",
      duration: 1,
      title: "Izin ke Kantor Samsat"
    },
    {
      approved: false,
      date: "2019-10-25T01:24:21.604Z",
      duration: 4,
      title: "Cuti acara keluarga"
    }
  ]

  constructor(
    private navCtrl: NavController,
    public global: GlobalFuncService
  ) { }

  ngOnInit() {
  }

  createCuti() {
    this.navCtrl.navigateForward('izin-cuti-create');
  }

}
