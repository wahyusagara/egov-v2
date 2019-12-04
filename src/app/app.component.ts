import { Component, NgZone } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private fcm: FCM,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.menu.enable(false);
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      this.subscribeBackbutton();
      this.checkLogin();
      this.openPageNotif();
    });
  }

  checkLogin() {
    if (!localStorage.getItem('nipbaru')) { this.router.navigateByUrl('login');} ;
  }

  subscribeBackbutton() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.router.url === '/login' || this.router.url === '/home') {
        navigator['app'].exitApp();
      } else {
        this.navCtrl.back();
      }
    });
  }

  openPageNotif() {
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
        // console.log(JSON.stringify(data))
        this.router.navigateByUrl(data['url'])
      } else {
        console.log("Received in foreground");
        // console.log(JSON.stringify(data));
        this.router.navigateByUrl(data['url'])
      };
    });
  }
}
