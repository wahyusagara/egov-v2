import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-approval-perjadin',
  templateUrl: './approval-perjadin.page.html',
  styleUrls: ['./approval-perjadin.page.scss'],
})
export class ApprovalPerjadinPage implements OnInit {
  status = [
    {
      name: 'Setujui',
      value: 3
    },
    {
      name: 'Tolak',
      value: 4
    }
  ];
  selected;
  data;

  constructor(
    private popOver: PopoverController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.data = this.navParams.data.data;
    console.log(this.data);
  }

  submit() {
    const data = {
      id: this.data.id,
      status: parseInt(this.selected)
    }
    this.popOver.dismiss(data);
  }
  cancel() {
    this.popOver.dismiss();
  }

}
