import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';

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
      img: "assets/img/avatar.png",
      label: "Izin / Cuti"
    },
    {
      img: "assets/img/avatar.png",
      label: "Perjanalan Dinas"
    },
    {
      img: "assets/img/avatar.png",
      label: "Kinerja"
    },
    {
      img: "assets/img/avatar.png",
      label: "Kendaraan"
    }
  ]
  item2 = [
    {
      img: "assets/img/avatar.png",
      label: "Ruang Rapat"
    },
    {
      img: "assets/img/avatar.png",
      label: "Persuratan"
    },
    {
      img: "assets/img/avatar.png",
      label: "Helpdesk Kepegawaian"
    },
    {
      img: "assets/img/menu.png",
      label: "Menu Lain"
    }
  ]

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
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

}
