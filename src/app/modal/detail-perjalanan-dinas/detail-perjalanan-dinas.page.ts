import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalFuncService } from 'src/app/services/global-func.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detail-perjalanan-dinas',
  templateUrl: './detail-perjalanan-dinas.page.html',
  styleUrls: ['./detail-perjalanan-dinas.page.scss'],
})
export class DetailPerjalananDinasPage implements OnInit, AfterViewInit {

  @Input() data: any;

  constructor(
    private modalCtrl: ModalController,
    private global: GlobalFuncService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.data);
  }

  async cetak() {
    this.global.showToast('Fitur ini sedang dalam pengembangan', 'primary');
  }

  async updateStatus(id, status, nama2, nipatasan, instansi, iddata) {
    const x = await {
      nama_atasan: JSON.parse(localStorage.getItem('datakaryawan')).NAMA,
      nip: JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU,
      stat: status,
      tgl: new Date().toISOString(),
      instansi_atasan: JSON.parse(localStorage.getItem('datakaryawan')).INSTANSIASAL,
      id: id,
      nama_atasan2: nama2,
      nipatasan: nipatasan,
      instansi: instansi,
      iddata: iddata
    }
    const body = {
      status: status,
      id: id,
      atasan_nip: localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : ''
    }
    return this.api.postData("https://egov-big.herokuapp.com/api/req-approval-perjadin", x).then((result) => {
      return result;
    }).catch((err) => {
      
    })
  }

  async cancel(id, nama, nip, instansi, iddata) {
    this.updateStatus(id, 3, nama, nip, instansi, iddata).then((res) => {
      console.log(res);
      this.modalCtrl.dismiss();
    }).catch((err) => {
      this.global.showToast('Failed update data', 'danger');
    })
  }

  async dismiss() {
    this.modalCtrl.dismiss();
  }

}
