import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
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
      title: "",
      id: ""
    }
  ]
  @ViewChild("mySlider", {read: IonSlides, static: false}) slides: IonSlides;

  constructor(
    private api: ApiService,
    private global: GlobalFuncService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getData();
  }
  ionSlidesDidLoad(){
    this.slides.startAutoplay();
  }
  getData() {
    return this.api.getData('https://sdm.big.go.id/siap/service/index.php/pegawai/berita')
    .then(async (result) => {
      this.contentList = [];
      var berita;
      berita = result;
      berita = await berita.sort((a, b) => {
        return new Date(b.BERITA_TGLTERBIT).getTime() - new Date(a.BERITA_TGLTERBIT).getTime();
      });
      for (let index = 0; index < 5; index++) {
        this.contentList.push({
          file: "assets/img/geospatialrun.jpg",
          title: berita[index].BERITA_JUDUL,
          id: berita[index].BERITA_ID
        });
      }
      console.log(berita);
    }).catch((err) => {
      this.global.showToast('Error Getting data', 'danger');
    })
  }
  openBerita(id) {
    console.log(id);
    this.navCtrl.navigateForward('berita', {
      queryParams: {
        id: id
      }
    });
  }

}
