import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-perjalanan-dinas-create',
  templateUrl: './perjalanan-dinas-create.page.html',
  styleUrls: ['./perjalanan-dinas-create.page.scss'],
})
export class PerjalananDinasCreatePage implements OnInit {
  location:string;
  reason:string;
  files = [];
  date = "";
  duration: number;
  title:string;
  index = 0;

  dataInsert = {
    nip: "",
    namapeg: "",
    tglb: "",
    tglk: "",
    maksud: "",
    lokasi: ""
  }

  constructor(
    private navCtrl: NavController,
    public global: GlobalFuncService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }
  submit() {
    // this.navCtrl.back();
    this.dataInsert.nip = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : '';
    this.dataInsert.namapeg = localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NAMA : '';
    this.api.postData("https://egov-big.herokuapp.com/api/create-surtug", this.dataInsert)
    .then((result) => {
      console.log(result);
      this.navCtrl.back();
    }).catch((err) => {
      console.log(err);
    })
  }
  ionViewDidEnter() {
    // this.uploading();
  }
  // async uploading() {
  //   console.log(this.pemalu.length);
  //   console.log(this.pemalu[this.index]);
  //   var x = [];
  //   x.push(this.pemalu[this.index]);
  //   await this.api.insertData(x);
  //   if (this.index !== (this.pemalu.length - 1)) {
  //     console.log(this.pemalu.length - 1);
  //     console.log('tidak sama');
  //     this.index = this.index + 1;
  //     this.uploading();
  //   } else {
  //     console.log('sudah cukup');
  //   }
  // }
  async changeFile(e) {
    const files = e.target.files;
    for (const a of files) {
      const b = await this.fileToBase64(a);
    }
  }
  async hapusFile(ind) {
    this.files = await this.files.filter((val, index) => {
      return index !== ind
    });
  }
  async fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const temp = this.files.map(a => a.name);
        if (temp.includes(file.name)) {
          resolve(file);
        } else {
          const data = {
            file_base: reader.result,
            file_name: file.name,
            file_size: file.size,
            file_type: file.type
          };
          this.files.push(data);
          resolve(data);
        }
      };
      reader.onerror = (error) => {
        reject(`error: ${error}`);
      };
      console.log(this.files);
    });
  }
  deleteImg(e) {
    this.files = this.files.filter(file => file.id !== parseInt(e, 10));
  }
}