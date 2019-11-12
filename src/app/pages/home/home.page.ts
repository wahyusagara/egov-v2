import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController, PopoverController, Platform } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import {AgendaPage} from '../../popover/agenda/agenda.page';
// import {TabmenusComponent} from '../../component/tabmenus/tabmenus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dateMulti = [
    "2019-10-15",
    "2019-10-17",
    "2019-10-19"
  ];
  dateku = "2019-10-17";
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    from: new Date(new Date().toISOString()).setDate(1),
    weekStart: 1,
    color: "danger"
  }
  public slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  contentList = [
    {
      file: "assets/img/geospatialrun.jpg",
      title: "Geospatial Run 2019"
    },
    {
      file: "assets/img/geospatialrun.jpg",
      title: "Geospatial Run 2019"
    },
    {
      file: "assets/img/geospatialrun.jpg",
      title: "Geospatial Run 2019"
    },
    {
      file: "assets/img/geospatialrun.jpg",
      title: "Geospatial Run 2019"
    },
    {
      file: "assets/img/geospatialrun.jpg",
      title: "Geospatial Run 2019"
    },
  ]
  @ViewChild("mySlider", {read: IonSlides, static: false}) slides: IonSlides;
  item1 = [
    {
      img: "assets/img/notepad.png",
      label: "Izin / Cuti",
      route: "izin-cuti"
    },
    {
      img: "assets/img/business-trip.png",
      label: "Perjanalan Dinas",
      route: "perjalanan-dinas"
    },
    {
      img: "assets/img/performance.png",
      label: "Kinerja",
      route: "home"
    },
    {
      img: "assets/img/flight.png",
      label: "Kendaraan",
      route: "/kendaraan"
    },
    {
      img: "assets/img/partners.png",
      label: "Ruang Rapat",
      route: "/ruang-rapat"
    },
    {
      img: "assets/img/email.png",
      label: "Persuratan",
      route: "home"
    },
    {
      img: "assets/img/performances.png",
      label: "Helpdesk Kepegawaian",
      route: "/helpdesk-kepegawaian"
    },
    {
      img: "assets/img/menu.png",
      label: "Menu Lain",
      route: "/menu-lain"
    }
  ];
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
  ionSlidesDidLoad(){
    this.slides.startAutoplay();
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
