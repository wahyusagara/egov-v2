import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-atasan',
  templateUrl: './atasan.page.html',
  styleUrls: ['./atasan.page.scss'],
})
export class AtasanPage implements OnInit, AfterViewInit, AfterContentInit {
  listAtasan = [];
  listSelected = [];
  search:string;
  id;

  constructor(
    private popOverCtrl: PopoverController,
    private api: ApiService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.log(this.navParams.data.data);
    this.id = this.navParams.data.data.id;
  }
  ngAfterViewInit() {
    
  }
  ngAfterContentInit() {
    this.getDataAtasan();
  }
  async onSearchChange(event) {
    console.log(event);
    this.search = await event.target.value;
    await this.getDataAtasan();
  }
  getDataAtasan() {
    return this.api.getAtasan("https://egov-big.herokuapp.com/api/get-atasan", this.search ? this.search : "").then((result) => {
      console.log(result);
      this.listAtasan = JSON.parse(JSON.stringify(result)).data;
    })
  }
  async submit() {
    let selected = [], retur = [];
    selected = this.listAtasan.filter(x => x.isChecked === true);
    selected.map((val, idx) => {
      retur.push({
        id_surtug: this.id,
        nip: val.nip,
        eselon: val.eselon_int,
        has_approval: 0
      });
    });
    const data = {
      id: this.id,
      data: selected,
      atasan: retur
    }
    await this.popOverCtrl.dismiss(data);
  }
  async cancel() {
    await this.popOverCtrl.dismiss();
  }
  async onSelect(event) {
    await this.popOverCtrl.dismiss(event.detail.value);
  }

}
