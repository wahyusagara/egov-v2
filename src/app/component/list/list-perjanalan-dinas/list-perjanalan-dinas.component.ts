import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AtasanPage } from "../../../popover/atasan/atasan.page";

@Component({
  selector: 'app-list-perjanalan-dinas',
  templateUrl: './list-perjanalan-dinas.component.html',
  styleUrls: ['./list-perjanalan-dinas.component.scss'],
})
export class ListPerjanalanDinasComponent implements OnInit {
  listDinas = [
    {
      id: 1,
      approved: 1,
      date: "2019-10-19T01:24:21.604Z",
      location: "Padang, Sumatera Barat",
      title: "Survei Pemetaan wilayah Barat"
    },
    {
      id: 2,
      approved: 2,
      date: "2019-10-25T01:24:21.604Z",
      location: "DKI Jakarta",
      title: "Survei Pemetaan wilayah Timur"
    }
  ];
  dinasSelected:any;
  atasanName = [
    {
      id: 1,
      name: "Atasan 1",
    },
    {
      id: 2,
      name: "Atasan 2",
    },
    {
      id: 3,
      name: "Atasan 3",
    }
  ]

  constructor(
    private popOver: PopoverController
  ) { }

  ngOnInit() {}
  async showPopOver(data) {
    const p = await this.popOver.create({
      animated: true,
      backdropDismiss: true,
      component: AtasanPage,
      // componentProps: {
        
      // },
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    p.onDidDismiss().then((res) => {
      if (res.data !== undefined) {
        console.log('dapat res data');
        this.listDinas[this.listDinas.indexOf(data)].approved = data.approved === 2 ? 3 : data.approved;
      }
      // console.log(this.listDinas[1]);
      
      // this.listDinas.find(x => x.id === id)
      console.log(res); 
    })
    
    return data.approved !== 2 ? {} : await p.present();
  }

}
