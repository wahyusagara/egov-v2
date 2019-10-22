import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-atasan',
  templateUrl: './atasan.page.html',
  styleUrls: ['./atasan.page.scss'],
})
export class AtasanPage implements OnInit {
  listAtasan = [
    {
      name: "Atasan 1",
      id: 1
    },
    {
      name: "Atasan 2",
      id: 2
    },
    {
      name: "Atasan 3",
      id: 3
    },
    {
      name: "Atasan 4",
      id: 4
    }
  ]

  constructor(
    private popOverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }
  async onSelect(event) {
    await this.popOverCtrl.dismiss(event.detail.value);
  }

}
