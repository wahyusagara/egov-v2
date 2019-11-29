import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AtasanPage } from "../../../popover/atasan/atasan.page";
import { ApiService } from 'src/app/services/api/api.service';

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
  listAtasan = [];

  constructor(
    private popOver: PopoverController,
    private api: ApiService
  ) { }

  ngOnInit() {}
  async getDataAtasan() {
    return this.api.getAtasan("https://egov-big.herokuapp.com/api/get-atasan", "").then((result) => {
      console.log(result);
    })
  }
  async showPopOver(data) {
    // await this.getDataAtasan();
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
      if (res.data !== undefined && res.data.length > 0) {
        console.log(res.data);
        this.listDinas[this.listDinas.indexOf(data)].approved = data.approved === 2 ? 3 : data.approved;
        this.sendNotif(res.data);
      }
    })
    
    return data.approved !== 2 ? {} : await p.present();
  }

  async sendNotif(data) {
    var body = {
      nip: []
    };
    await data.forEach(element => {
      body.nip.push(`'${element.nip}'`)
    });
    await this.api.pushNotif(body).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }

}
