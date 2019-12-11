import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalFuncService } from 'src/app/services/global-func.service';

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

  atasan = [
    {
      nama: "Abdurasyid S.Kom, M.Sc.",
      nip: "197903092005021002"
    },
    {
      nama: "Roswidyatmoko Dwihatmojo S.Si",
      nip: "198411012009121002"
    },
    {
      nama: "Dr. Ir Mulyanto Darmawan M.Sc",
      nip: "196408121991031006"
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

  submit() {
    console.log(this.test);
    this.dataInsert.tgl = new Date().toISOString();
    this.dataInsert.namapegg = this.dataKaryawan.nama;
    this.dataInsert.nip = this.dataKaryawan.nip;
    console.log(this.dataInsert);
    this.dataInsert.tglb = new Date(this.dataInsert.tglb).toISOString();
    this.dataInsert.tglk = new Date(this.dataInsert.tglk).toISOString();
    this.dataInsert.tgl = new Date(this.dataInsert.tgl).toISOString();
    this.dataInsert.panggol = "(III/a) Penata Muda";
    this.dataInsert.jab = "Pranata Komputer";
    this.dataInsert.instansi = "Biro Perencanaan, Kepegawaian dan Hukum";
    var atasan = this.atasan.find(x => x.nip == this.dataInsert.nipatasan);
    this.dataInsert.namaatasan = atasan.nama;
    this.api.postData("https://egov-big.herokuapp.com/api/create-perjadin", this.dataInsert).then((res) => {
      console.log(res);
      const resp = JSON.parse(JSON.stringify(res));
      if (resp.sukses === true) {
        this.navCtrl.back()
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
