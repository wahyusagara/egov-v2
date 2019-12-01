import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ApprovalPerjadinPage } from 'src/app/popover/approval-perjadin/approval-perjadin.page';
import { PopoverController } from '@ionic/angular';

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
    private popOver: PopoverController
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
      this.resp = result;
      this.listSurtug = JSON.parse(JSON.stringify(result)).data;
      console.log(this.listSurtug);
    }).catch((err) => {
      console.log(err);
    });
  }
  async showPopOver(data) {
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
        this.updateStatus(res.data.id, res.data.status);
      }
    });
    
    return data.status_approval !== 2 ? {} : await p.present();
  }

  async updateStatus(id, status) {
    const body = {
      status: status,
      id: id,
      atasan_nip: localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : ''
    }
    this.api.postData("https://egov-big.herokuapp.com/api/approval-perjadin", body).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }

}
