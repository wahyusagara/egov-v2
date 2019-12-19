import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ApprovalPerjadinPage } from 'src/app/popover/approval-perjadin/approval-perjadin.page';
import { PopoverController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-list-perjalanan-dinas-approval',
  templateUrl: './list-perjalanan-dinas-approval.component.html',
  styleUrls: ['./list-perjalanan-dinas-approval.component.scss'],
})
export class ListPerjalananDinasApprovalComponent implements OnInit {
  listSurtug = [];
  resp;

  constructor(
    private api: ApiService,
    private popOver: PopoverController,
    private global: GlobalFuncService
  ) { }

  ngOnInit() {}
  async ngAfterViewInit() {
    await this.getDataSurtug();
  }
  // async getDataAtasan() {
  //   return this.api.getAtasan("https://egov-big.herokuapp.com/api/get-atasan", "").then((result) => {
  //     console.log(result);
  //   })
  // }
  async getDataSurtug() {
    const nip = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : '';
    return this.api.getData('https://egov-big.herokuapp.com/api/get-surtug', null, nip, null).then((result) => {
      console.log(result);
      this.resp = result;
      this.listSurtug = JSON.parse(JSON.stringify(result)).data;
      console.log(this.listSurtug);
    }).catch((err) => {
      console.log(err);
    });
  }
  async showPopOver(data) {
    console.log(data);
    const p = await this.popOver.create({
      animated: true,
      backdropDismiss: true,
      component: ApprovalPerjadinPage,
      componentProps: {
        data: data
      },
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    p.onDidDismiss().then((res) => {
      console.log(res);
      if (res.data !== undefined) {
        this.updateStatus(res.data.id, res.data.status, res.data.nama_atasan2, res.data.nipatasan, res.data.instansi, res.data.iddata);
        this.getDataSurtug();
      }
    });
    var nama = JSON.parse(localStorage.getItem('datakaryawan')).NAMA;
    if (!data.pda.includes(nama) && data.status_approval != 3 && data.status_approval != 1) {
      await p.present();
    }
    // return data.pda.includes(nama) ? {} : await p.present();
  }

  async updateStatus(id, status, nama2, nipatasan, instansi, iddata) {
    const x = {
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
    this.api.postData("https://egov-big.herokuapp.com/api/req-approval-perjadin", x).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }

  async cetak() {
    this.global.showToast('Fitur ini sedang dalam pengembangan', 'primary');
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
