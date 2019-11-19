import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController, PopoverController, Platform } from '@ionic/angular';
import {AgendaPage} from '../../popover/agenda/agenda.page';
// import {TabmenusComponent} from '../../component/tabmenus/tabmenus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isMobile:boolean = false;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private popOver: PopoverController,
    private plt: Platform
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.isMobile = this.plt.platforms().includes('mobile') ? true : false;
    // console.log(this.plt.platforms().includes('mobile') ? 'mobile' : 'browser');
  }
  dateSelect(event) {
    console.log(event);
  }
  showMenu() {
    // this.menu.open()
    this.navCtrl.navigateForward('notifikasi');
  }
  navPage(url) {
    console.log(url);
    this.navCtrl.navigateForward(url);
  }
  async todayAgenda() {
    const p = await this.popOver.create({
      animated: true,
      component: AgendaPage,
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    return await p.present();
  }

}
