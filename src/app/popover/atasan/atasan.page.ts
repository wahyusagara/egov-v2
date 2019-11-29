import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
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

  constructor(
    private popOverCtrl: PopoverController,
    private api: ApiService
  ) { }

  ngOnInit() {
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
    return this.api.getAtasan("http://localhost:5000/api/get-atasan", this.search ? this.search : "").then((result) => {
      console.log(result);
      this.listAtasan = JSON.parse(JSON.stringify(result)).data;
    })
  }
  async submit() {
    await this.popOverCtrl.dismiss(this.listAtasan.filter(x => x.isChecked === true));
  }
  async cancel() {
    await this.popOverCtrl.dismiss();
  }
  async onSelect(event) {
    await this.popOverCtrl.dismiss(event.detail.value);
  }

}
