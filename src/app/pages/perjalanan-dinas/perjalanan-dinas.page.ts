import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { FormDummyComponent } from "../../component/form-dummy/form-dummy.component";

@Component({
  selector: 'app-perjalanan-dinas',
  templateUrl: './perjalanan-dinas.page.html',
  styleUrls: ['./perjalanan-dinas.page.scss'],
})
export class PerjalananDinasPage implements OnInit {
  showSelectable = false;
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

  constructor(
    private navCtrl: NavController,
    private popOver: PopoverController
  ) { }

  ngOnInit() {
  }

  createDinas() {
    this.navCtrl.navigateForward('perjalanan-dinas-create');
  }
  atasanChange(event, id) {
    console.log(event, id);
    this.showSelectable = false;
  }
  showSelect() {
    this.showSelectable = true;
  }
  async showPopOver(event) {
    console.log(event);
    const p = await this.popOver.create({
      animated: true,
      backdropDismiss: true,
      component: FormDummyComponent,
      componentProps: {
        
      },
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    return await p.present();
  }

}