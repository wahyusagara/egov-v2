import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

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

  constructor() { }

  ngOnInit() {}
  ionSlidesDidLoad(){
    this.slides.startAutoplay();
  }

}
