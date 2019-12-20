import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-create-perjalanan-dinas',
  templateUrl: './create-perjalanan-dinas.component.html',
  styleUrls: ['./create-perjalanan-dinas.component.scss'],
})
export class CreatePerjalananDinasComponent implements OnInit {
  dataKaryawan = {
    nama: "",
    nip: ""
  };
  test = "";

  dataInsert = {
    "lembar": "",
    "kode": "",
    "noagen": "",
    "namapegg": "",
    "nip": "",
    "panggol": "",
    "jab": "",
    "tingkat": "",
    "maksud": "",
    "alat": "",
    "tb": "",
    "tj": "",
    "lama": 0,
    "tglb": "",
    "tglk": "",
    "instansi": "",
    "akun": "",
    "keluar": "",
    "ppk": "",
    "nipppk": "",
    "tgl": "",
    "stat": 2,
    "ket1": "",
    "ket2": "",
    "ket3": "",
    "ket4": "",
    "ket5": "",
    "ket6": "",
    "ket7": "",
    "ket8": "",
    "ket9": "",
    "ortala": "",
    "niportala": "",
    "nost": "",
    "golongan": "",
    "uspd": "",
    "nipatasan": "",
    "namaatasan": ""
  }

  tb = [
    {
      name: "Jakarta",
      val: "Jakarta"
    },
    {
      name: "Tangerang",
      val: "Tangerang"
    }
  ];
  tb_selected:any;

  atasan = [
    {
      nama: "Dr. Ir Wiwin Ambarwulan M.Sc",
      nip: "196006291988012001"
    },
    {
      nama: "Ir Ali Nor Hidayat",
      nip: "196512201993031002"
    },
    {
      nama: "Ir Ida Herliningsih M.Si",
      nip: "195912021990022001"
    }
  ]

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private global: GlobalFuncService
  ) { }

  ngOnInit() {
    this.dataKaryawan = {
      nama: localStorage.getItem('datakaryawan') ? 
      (JSON.parse(localStorage.getItem('datakaryawan')).GELARDEPAN ? JSON.parse(localStorage.getItem('datakaryawan')).GELARDEPAN : "") + ' ' + 
      JSON.parse(localStorage.getItem('datakaryawan')).NAMA + ' ' + 
      (JSON.parse(localStorage.getItem('datakaryawan')).GELARBELAKANG ? JSON.parse(localStorage.getItem('datakaryawan')).GELARBELAKANG : "") : "",
      nip: localStorage.getItem('datakaryawan') ? JSON.parse(localStorage.getItem('datakaryawan')).NIPBARU : "",
    }
  }

  tb_change(event: {
    component: IonicSelectableComponent,
    value: {name: "", val: ""}
  }) {
    this.dataInsert.tb = event.value.val;
  }
  tj_change(event: {
    component: IonicSelectableComponent,
    value: {name: "", val: ""}
  }) {
    this.dataInsert.tj = event.value.val
  }

  submit() {
    this.dataInsert.tgl = new Date().toISOString();
    this.dataInsert.namapegg = this.dataKaryawan.nama;
    this.dataInsert.nip = this.dataKaryawan.nip;
    this.dataInsert.tglb = new Date(this.dataInsert.tglb).toISOString();
    this.dataInsert.tglk = new Date(this.dataInsert.tglk).toISOString();
    this.dataInsert.tgl = new Date(this.dataInsert.tgl).toISOString();
    this.dataInsert.panggol = "(III/a) Penata Muda";
    this.dataInsert.jab = "Pranata Komputer";
    this.dataInsert.instansi = "Biro Perencanaan, Kepegawaian dan Hukum";
    var atasan = this.atasan.find(x => x.nip == this.dataInsert.nipppk);
    this.dataInsert.ppk = atasan.nama;
    this.api.postData("https://egov-big.herokuapp.com/api/create-perjadin", this.dataInsert).then((res) => {
      const resp = JSON.parse(JSON.stringify(res));
      if (resp.sukses === true) {
        this.navCtrl.back();
      } else {
        this.global.showToast("Failed create perjadin", "danger");
      }
    }).catch((err) => {
      this.global.showToast("Failed create perjadin", "danger");
    })
  }

  ionViewDidEnter() {
    
  }

}
