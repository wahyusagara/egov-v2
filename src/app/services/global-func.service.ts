import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalFuncService {
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
