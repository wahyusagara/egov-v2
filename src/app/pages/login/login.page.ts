import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { GlobalFuncService } from '../../services/global-func.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private global: GlobalFuncService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  async submit() {
    await this.global.showToast('Proses login', 'primary');
    await this.login();

    // await this.global.showToast('Proses login', 'primary');
    // setTimeout(() => {
    //   this.global.showToast('Login successfully', 'success');
    //   this.navCtrl.navigateRoot('home');
    // }, 2000)
  }
  login() {
    return this.api.login(this.username, this.password).then((result) => {
      console.log(result);
      let a;
      a = result;
      if (a.success) {
        this.global.showToast('Login successfully', 'success');
        this.navCtrl.navigateRoot('home');
      } else {
        this.global.showToast('Login Failed', 'danger');
      }
      console.log(a.text);
    }).catch((err) => {
      console.log(err.error.text);
      let x = '';
      x = err.error.text;
      if (x.includes('true')) {
        this.global.showToast('Login successfully', 'success');
        this.navCtrl.navigateRoot('home');
      } else {
        this.global.showToast('Login Failed', 'danger');
      }
    });
  }

}
