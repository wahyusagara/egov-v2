import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AtasanPage } from "../../popover/atasan/atasan.page";
import { ApiService } from 'src/app/services/api/api.service';

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
  ];
  data = {
    isApproval: false
  }
  isApproval = true;
  resp;
  listSurtug = [];

  constructor(
    private navCtrl: NavController,
    private popOver: PopoverController,
    private api: ApiService
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.getDataSurtug();
  }
  async ionViewDidEnter() {
    // await this.getData();
  }
  isClicked() {
    // this.isApproval = !this.isApproval;
    this.data.isApproval = !this.data.isApproval
  }
  async getData() {
    fetch("https://egov.big.go.id/simperjadinbig/xdatax/pejabat/ppk", {
      referrer: "https://egov.big.go.id/simperjadinbig/xdatax/pejabat/ppk",
      keepalive: true
    }).then((result) => {
      return result.json();
    }).then((hasil) => {
    })
  }

  createDinas() {
    this.navCtrl.navigateForward('perjalanan-dinas-create');
  }
  atasanChange(event, id) {
    this.showSelectable = false;
  }
  showSelect() {
    this.showSelectable = true;
  }
  async showPopOver(data) {
    const p = await this.popOver.create({
      animated: true,
      backdropDismiss: true,
      component: AtasanPage,
      // componentProps: {
        
      // },
      keyboardClose: true,
      showBackdrop: true,
      translucent: true
    });
    p.onDidDismiss().then((res) => {
      if (res.data !== undefined) {
        this.listDinas[this.listDinas.indexOf(data)].approved = data.approved === 2 ? 3 : data.approved;
      }
    })
    
    return data.approved !== 2 ? {} : await p.present();
  }

  async getDataSurtug() {
    const nip = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : '';
    return this.api.getData('https://egov-big.herokuapp.com/api/get-surtug', null, null, nip).then((result) => {
      this.resp = result;
      this.listSurtug = JSON.parse(JSON.stringify(result)).data;
    }).catch((err) => {
      console.error(err);
    });
  }

}
