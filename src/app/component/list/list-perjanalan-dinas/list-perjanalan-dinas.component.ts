import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AtasanPage } from "../../../popover/atasan/atasan.page";
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-list-perjanalan-dinas',
  templateUrl: './list-perjanalan-dinas.component.html',
  styleUrls: ['./list-perjanalan-dinas.component.scss'],
})
export class ListPerjanalanDinasComponent implements OnInit, AfterViewInit {
  resp;
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
  listSurtug = [];

  constructor(
    private popOver: PopoverController,
    private api: ApiService,
    private global: GlobalFuncService
  ) { }

  ngOnInit() {}
  async ngAfterViewInit() {
    await this.getDataSurtug();
  }
  async getDataAtasan() {
    return this.api.getAtasan("https://egov-big.herokuapp.com/api/get-atasan", "").then((result) => {
      console.log(result);
    })
  }
  async getDataSurtug() {
    const nip = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : '';
    return this.api.getData('https://egov-big.herokuapp.com/api/get-surtug', null, null, nip).then((result) => {
      this.resp = result;
      this.listSurtug = JSON.parse(JSON.stringify(result)).data;
      console.log(this.listSurtug);
    }).catch((err) => {
      console.log(err);
    });
  }
  async showPopOver(data) {
    // await this.getDataAtasan();
    const p = await this.popOver.create({
      animated: true,
      backdropDismiss: true,
      component: AtasanPage,
      componentProps: {
        data: data
      },
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    p.onDidDismiss().then(async (res) => {
      if (res.data !== undefined) {
        // await this.updateStatus(res.data.id, res.data.data[0].nip);
        await this.insertAtasanSurtug(res.data.atasan);
        await this.sendNotif(res.data.data);
        this.getDataSurtug();
      }
    });
    
    // return data.status_approval !== 1 ? {} : await p.present();
  }

  // async updateStatus(id, nip) {
  //   const body = {
  //     status: 2,
  //     id: id,
  //     atasan_nip: nip
  //   }
  //   this.api.postData("https://egov-big.herokuapp.com/api/approval-perjadin", body).then((result) => {
  //     console.log(result);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  async insertAtasanSurtug(data) {
    return this.api.postData("https://egov-big.herokuapp.com/api/insert-atasan-surtug", data).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
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

  async cetak() {
    this.global.showToast('Fitur ini sedang dalam pengembangan', 'primary');
  }

  async updateStatus(id, status, nama2, nipatasan, instansi, iddata) {
    const x = await {
      nama_atasan: JSON.parse(localStorage.getItem('datakaryawan')).NAMA,
      nip: JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU,
      stat: status,
      tgl: new Date().toISOString(),
      instansi_atasan: JSON.parse(localStorage.getItem('datakaryawan')).INSTANSIASAL,
      id: id,
      nama_atasan2: nama2,
      nipatasan: nipatasan,
      instansi: instansi,
      iddata: iddata
    }
    const body = {
      status: status,
      id: id,
      atasan_nip: localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : ''
    }
    return this.api.postData("https://egov-big.herokuapp.com/api/req-approval-perjadin", x).then((result) => {
      return result;
    }).catch((err) => {
      
    })
  }

  async cancel(id, nama, nip, instansi, iddata) {
    this.updateStatus(id, 3, nama, nip, instansi, iddata).then((res) => {
      console.log(res);
      this.getDataSurtug();
    }).catch((err) => {
      this.global.showToast('Failed update data', 'danger');
    })
  }

}
