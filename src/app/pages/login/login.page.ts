import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { GlobalFuncService } from "../../services/global-func.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private global: GlobalFuncService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  async submit() {
    await this.global.showToast('Proses login', 'primary');
    setTimeout(() => {
      this.global.showToast('Login successfully', 'success');
      this.navCtrl.navigateRoot('home');
    }, 2000)
  }

}
