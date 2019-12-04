import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { GlobalFuncService } from '../../services/global-func.service';
import { ApiService } from 'src/app/services/api/api.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  device_id = '';
  listPrime = [];

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private global: GlobalFuncService,
    private api: ApiService,
    private fcm: FCM,
    private platform: Platform
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(false);
    if (localStorage.getItem('nipbaru')) { this.navCtrl.navigateRoot('home') };
  }
  async submit() {
    if (this.username === '' || this.password === '') {
      this.global.showToast('Silahkan masukkan username dan password', 'danger');
    } else {
      await this.global.showToast('Proses login', 'primary');
      await this.login();
    }
    // await this.global.showToast('Proses login', 'primary');
    // setTimeout(() => {
    //   this.global.showToast('Login successfully', 'success');
    //   this.navCtrl.navigateRoot('home');
    // }, 2000)
  }
  login() {
    if (this.username === '') { this.global.showToast('Login Failed', 'danger'); }
    return this.api.login(this.username, this.password).then(async (result) => {
      console.log(result);
      let a;
      a = result;
      if (a.length > 0) {
        localStorage.setItem('nipbaru', this.username);
        localStorage.setItem('datakaryawan', JSON.stringify(a[0]));
        if (this.platform.is('cordova')) {
          await this.getDeviceId();
          if (this.device_id !== undefined && this.device_id !== 'web') {
            // const eselon = JSON.parse(JSON.stringify(a[0]))
            await this.api.uploadId(this.username, this.device_id);
          }
        }
      // if (a.success) {
        this.global.showToast('Login successfully', 'success');
        this.navCtrl.navigateRoot('home');
      } else {
        this.global.showToast('Login Failed', 'danger');
      }
      // console.log(a.text);
    }).catch(async (err) => {
      let x = '';
      x = err.error.text;
      if (x.includes('true')) {
        if (this.platform.is('cordova')) {
          await this.getDeviceId().then(async () => {
            if (this.device_id !== undefined && this.device_id !== 'web') {
              await this.api.uploadId(this.username, this.device_id);
            }
          });
        }
        this.global.showToast('Login successfully', 'success');
        this.navCtrl.navigateRoot('home');
      } else {
        this.global.showToast('Login Failed', 'danger');
      }
    });
  }
  async getDeviceId() {
    return this.fcm.getToken().then(
      r => { this.device_id = r; return this.device_id },
      e => { console.log(e); });
  }

}
