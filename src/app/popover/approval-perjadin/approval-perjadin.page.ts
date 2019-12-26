import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-approval-perjadin',
  templateUrl: './approval-perjadin.page.html',
  styleUrls: ['./approval-perjadin.page.scss'],
})
export class ApprovalPerjadinPage implements OnInit {
  status = [
    {
      name: 'Setujui',
      value: 1
    },
    {
      name: 'Tolak',
      value: 3
    },
    {
      name: 'Lanjutkan',
      value: 2
    }
  ];
  atasan = [];
  atasan2;
  selected;
  data;

  constructor(
    private popOver: PopoverController,
    private navParams: NavParams,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.data = this.navParams.data.data;
    this.getAtasan();
    // console.log(this.data);
  }

  getAtasan() {
    return this.api.getAtasan('https://egov-big.herokuapp.com/api/get-atasan')
    .then((result) => {
      this.atasan = JSON.parse(JSON.stringify(result)).data;
      // console.log(this.atasan);
    }).catch((err) => {
      console.error(err);
    })
  }

  change() {
    // console.log(this.selected);
  }

  submit() {
    // console.log(this.atasan2);
    const local = JSON.parse(localStorage.getItem('datakaryawan'));
    const nama = local.GELARDEPAN + ' ' + local.NAMA + ' ' + local.GELARBELAKANG;
    const data = {
      iddata: this.data.iddata,
      id: this.data.pd_id,
      status: parseInt(this.selected),
      nama_atasan2: this.atasan2 ? this.atasan.find(x => x.nip == this.atasan2).nama : nama,
      nipatasan: this.atasan2 ? this.atasan2 : local.NIPBARU,
      instansi: this.data.instansi
    }
    this.popOver.dismiss(data);
  }
  cancel() {
    this.popOver.dismiss();
  }

}
