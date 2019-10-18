import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalFuncService {

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { }

  public async showToast(msg, color) {
    const t = await this.toastCtrl.create({
      message: msg,
      color: color,
      animated: true,
      keyboardClose: true,
      duration: 2000,
      position: "bottom"
    });
    t.present();
  }

  public async showLoading(msg) {
    const l = await this.loadingCtrl.create({
      message: msg,
      animated: true,
      showBackdrop: true,
      backdropDismiss: false,
      keyboardClose: true,
      spinner: "bubbles",
      translucent: false
    });
    l.present();
  }
}
