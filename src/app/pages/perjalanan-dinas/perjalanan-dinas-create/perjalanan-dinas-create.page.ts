import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';

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

  constructor(
    private navCtrl: NavController,
    public global: GlobalFuncService
  ) { }

  ngOnInit() {
  }
  submit() {
    this.navCtrl.back();
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
      console.log(this.files);
    });
  }
  deleteImg(e) {
    this.files = this.files.filter(file => file.id !== parseInt(e, 10));
  }
}