import { Component, OnInit,  AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { AtasanPage } from "../../../popover/atasan/atasan.page";
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';
import { DetailPerjalananDinasPage } from 'src/app/modal/detail-perjalanan-dinas/detail-perjalanan-dinas.page';

@Component({
  selector: 'app-list-perjanalan-dinas',
  templateUrl: './list-perjanalan-dinas.component.html',
  styleUrls: ['./list-perjanalan-dinas.component.scss'],
})
export class ListPerjanalanDinasComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() dataSurtug = [];
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
    private global: GlobalFuncService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  async ngAfterViewInit() {
    // await this.getDataSurtug();
  }
  async ngAfterContentInit() {
    this.listSurtug = this.dataSurtug;
  }
  async getDataAtasan() {
    return this.api.getAtasan("https://egov-big.herokuapp.com/api/get-atasan", "").then((result) => {
    })
  }
  async getDataSurtug() {
    const nip = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : '';
    return this.api.getData('https://egov-big.herokuapp.com/api/get-surtug', null, null, nip).then((result) => {
      this.resp = result;
      this.listSurtug = JSON.parse(JSON.stringify(result)).data;
    }).catch((err) => {
      console.log(err);
    });
  }

  async detailPerjadin(data) {
    const m = await this.modalCtrl.create({
      animated: true,
      backdropDismiss: true,
      component: DetailPerjalananDinasPage,
      keyboardClose: true,
      showBackdrop: true,
      componentProps: {
        data: data
      }
    });

    m.onDidDismiss().then((data) => {
      this.getDataSurtug();
    });
    
    return await m.present();
  }

  async insertAtasanSurtug(data) {
    return this.api.postData("https://egov-big.herokuapp.com/api/insert-atasan-surtug", data).then((result) => {
      // console.log(result);
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
      // console.log(result);
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
      // console.log(res);
      this.getDataSurtug();
    }).catch((err) => {
      this.global.showToast('Failed update data', 'danger');
    })
  }

}
