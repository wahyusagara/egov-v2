import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss'],
})
export class ListProfileComponent implements OnInit {
  image = 'assets/img/profile.png';
  dataProfile = {
    nama: "",
    hp: "",
    email: "",
    alamat: "",
    ttl: ""
  };

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private alertCtrl: AlertController,
    private global: GlobalFuncService
  ) { }

  async ngOnInit() {
    await this.getData();
  }
  logout() {
    this.navCtrl.navigateRoot('login');
  }
  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'OK!',
          handler: () => {
            localStorage.clear();
            this.logout();
          }
        }
      ]
    });
  
    return await alert.present();
  }
  async getData() {
    const nip = localStorage.getItem('nipbaru') ? localStorage.getItem('nipbaru') : '';
    return this.api.getData(`https://sdm.big.go.id/siap/service/index.php/pegawai?NIPBARU=${nip}`)
    .then((result) => {
      var res:any;
      res = result;
      if (res.length === 1) {
        const resp = result[0];
        const ttl = new Date(resp.TGLLAHIR);
        const bulan = ((ttl.getMonth() + 1) > 12 ? 1 : (ttl.getMonth() + 1)).toString();
        const hari = ttl.getDate().toString();
        const tanggal = ttl.getFullYear().toString() + "-" + 
        (bulan.length > 1 ? bulan : '0' + bulan) + "-" + 
        (hari.length > 1 ? hari : '0' + hari);

        this.dataProfile = {
          nama: resp.NAMA,
          hp: resp.HP,
          email: resp.EMAIL,
          alamat: resp.ALAMAT,
          ttl: tanggal
        }
      } else {
        this.global.showToast('Failed get data', 'danger');
      }
    }).catch((err) => {
      console.log(err);
    })
  }

}
