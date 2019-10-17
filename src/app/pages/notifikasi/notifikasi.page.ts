import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {
  listMenu = [
    "Log Book",
    "Layanan Kepegawaian",
    "Perjalanan Dinas",
    "Perjalanan Meeting",
    "Laporan Perjalanan Dinas",
    "Cuti Tahunan",
    "Cuti Atasan Penting",
    "Layanan Kendaraan",
    "Layanan Ruang Rapat",
    "Layanan Peralatan",
    "Izin Sakit",
    "Layanan Keamanan",
    "Layanan Arsip",
    "Izin Pulang Sebelum Waktu"
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

}
