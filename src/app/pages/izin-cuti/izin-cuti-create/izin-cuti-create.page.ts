import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';

@Component({
  selector: 'app-izin-cuti-create',
  templateUrl: './izin-cuti-create.page.html',
  styleUrls: ['./izin-cuti-create.page.scss'],
})
export class IzinCutiCreatePage implements OnInit {
  type:string;
  reason:string;
  files = [];
  date = "";
  duration: number;

  constructor(
    private navCtrl: NavController,
    private global: GlobalFuncService
  ) { }

  ngOnInit() {
  }
  changeType(){
    // console.log(this.type);
  }
  submit() {
    // this.global.listCuti.push(
    //   {
    //     approved: false,
    //     date: this.date,
    //     duration: this.duration,
    //     title: this.reason
    //   }
    // );
    const type = this.type === "1" ? "Cuti" : "Izin";
    this.global.showToast('Insert ' + type + ' Berhasil', 'success');
    this.navCtrl.navigateRoot('izin-cuti');
  }
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
      // console.log(this.files);
    });
  }
  deleteImg(e) {
    this.files = this.files.filter(file => file.id !== parseInt(e, 10));
  }

}
