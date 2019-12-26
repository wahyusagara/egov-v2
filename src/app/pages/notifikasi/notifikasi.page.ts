import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {
  listMenu = [
    {
      id: 1,
      name: "Log Book",
      url: "/helpdesk-kepegawaian",
      count: 0
    },
    {
      id: 2,
      name: "Layanan Kepegawaian",
      url: "/home",
      count: 0
    },
    {
      id: 3,
      name: "Perjalanan Dinas",
      url: "perjalanan-dinas",
      count: 0
    },
    {
      id: 4,
      name: "Perjalanan Meeting",
      url: "/home",
      count: 0
    },
    {
      id: 5,
      name: "Laporan Perjalanan Dinas",
      url: "/home",
      count: 0
    },
    {
      id: 6,
      name: "Cuti Tahunan",
      url: "/izin-cuti",
      count: 0
    },
    {
      id: 7,
      name: "Cuti Atasan Penting",
      url: "/izin-cuti",
      count: 0
    },
    {
      id: 8,
      name: "Layanan Kendaraan",
      url: "/home",
      count: 0
    },
    {
      id: 9,
      name: "Layanan Ruang Rapat",
      url: "/home",
      count: 0
    },
    {
      id: 10,
      name: "Layanan Peralatan",
      url: "/home",
      count: 0
    },
    {
      id: 11,
      name: "Izin Sakit",
      url: "/izin-cuti",
      count: 0
    },
    {
      id: 12,
      name: "Layanan Keamanan",
      url: "/home",
      count: 0
    },
    {
      id: 13,
      name: "Layanan Arsip",
      url: "/home",
      count: 0
    },
    {
      id: 14,
      name: "Izin Pulang Sebelum Waktu",
      url: "/home",
      count: 0
    },
  ];
  resp:any;
  counter = 0;

  constructor(
    private navCtrl: NavController,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getNotifList();
  }

  back() {
    this.navCtrl.back();
  }
  openPage(url) {
    this.navCtrl.navigateForward(url);
  }

  async getNotifList() {
    const nip = JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU;
    this.api.getData('http://localhost:5000/api/list-notif', null, null, nip).then((result) => {
      this.resp = JSON.parse(JSON.stringify(result)).data;
      this.listMenu.map((val,idx) => {
        val.count = this.resp.filter(x => x.type === val.url && x.is_read === 0).length;
        // return val;
      });
    })
  }

  async updateStatusNotif(url) {
    const data = {
      type: url,
      nip: JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU
    };
    this.api.postData('https://egov-big.herokuapp.com/api/update-status-notif', data).then((result) => {
      // console.log(result);
      this.openPage(url);
    })
  }

}
