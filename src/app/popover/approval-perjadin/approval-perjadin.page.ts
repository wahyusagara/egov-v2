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
  atasan = [
    {
      nama: "Abdurasyid S.Kom, M.Sc.",
      nip: "197903092005021002"
    },
    {
      nama: "Roswidyatmoko Dwihatmojo S.Si",
      nip: "198411012009121002"
    },
    {
      nama: "Dr. Ir Mulyanto Darmawan M.Sc",
      nip: "196408121991031006"
    }
  ]
  atasan2;
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

  change() {
    console.log(this.selected);
  }

  submit() {
    const data = {
      iddata: this.data.iddata,
      id: this.data.pd_id,
      status: parseInt(this.selected),
      nama_atasan2: this.atasan.find(x => x.nip == this.atasan2).nama,
      nipatasan: this.atasan2,
      instansi: this.data.instansi
    }
    this.popOver.dismiss(data);
  }
  cancel() {
    this.popOver.dismiss();
  }

}
