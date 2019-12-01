import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AtasanPage } from "../../popover/atasan/atasan.page";

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

  constructor(
    private navCtrl: NavController,
    private popOver: PopoverController
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    console.log(JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU);
    const x = new Date().toISOString();
    console.log(new Date(x).getTime());
    // await this.getData();
  }
  isClicked() {
    // this.isApproval = !this.isApproval;
    this.data.isApproval = !this.data.isApproval
    console.log(this.data.isApproval);
  }
  async getData() {
    fetch("https://egov.big.go.id/simperjadinbig/xdatax/pejabat/ppk", {
      referrer: "https://egov.big.go.id/simperjadinbig/xdatax/pejabat/ppk",
      keepalive: true
    }).then((result) => {
      console.log(result);
      return result.json();
    }).then((hasil) => {
      console.log(hasil);
    })
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
        console.log('dapat res data');
        this.listDinas[this.listDinas.indexOf(data)].approved = data.approved === 2 ? 3 : data.approved;
      }
      // console.log(this.listDinas[1]);
      
      // this.listDinas.find(x => x.id === id)
      console.log(res); 
    })
    
    return data.approved !== 2 ? {} : await p.present();
  }

}
