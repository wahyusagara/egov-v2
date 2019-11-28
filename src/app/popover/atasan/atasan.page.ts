import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-atasan',
  templateUrl: './atasan.page.html',
  styleUrls: ['./atasan.page.scss'],
})
export class AtasanPage implements OnInit, AfterViewInit {
  listAtasan = []

  constructor(
    private popOverCtrl: PopoverController,
    private api: ApiService
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.getDataAtasan()
  }
  getDataAtasan() {
    this.api.getData('https://egov.big.go.id/simperjadinbig/xdatax/pejabat/ppk').then((result) => {
      console.log(result);
      let a;
      a = result
      this.listAtasan = a;
    }).catch((err) => {
      console.log(err);
    })
  }
  async onSelect(event) {
    await this.popOverCtrl.dismiss(event.detail.value);
  }

}
