import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftar-pegawai',
  templateUrl: './daftar-pegawai.page.html',
  styleUrls: ['./daftar-pegawai.page.scss'],
})
export class DaftarPegawaiPage implements OnInit {
  imgNotFound = 'assets/img/notfound.png';
  search:string;
  list_pegawai = [
    {
      full_name: "Freddy Mercury ,ST ,MT",
      nip: 101010101010,
      bagian: "Surveyor Pemetaan Ahli, (III C)",
      departement: "Pusat Tata Ruang dan Atlas",
      email: "freddy.mercury@big.go.id",
      in_office: true
    },
    {
      full_name: "Morgan Freeman ,ST",
      nip: 101010101010,
      bagian: "Surveyor Pemetaan Ahli, (III A)",
      departement: "Pusat Tata Ruang dan Atlas",
      email: "freeman@big.go.id",
      in_office: false
    }
  ];
  pegawai = [
    {
      full_name: "Freddy Mercury ,ST ,MT",
      nip: 101010101010,
      bagian: "Surveyor Pemetaan Ahli, (III C)",
      departement: "Pusat Tata Ruang dan Atlas",
      email: "freddy.mercury@big.go.id",
      in_office: true
    },
    {
      full_name: "Morgan Freeman ,ST",
      nip: 101010101010,
      bagian: "Surveyor Pemetaan Ahli, (III A)",
      departement: "Pusat Tata Ruang dan Atlas",
      email: "freeman@big.go.id",
      in_office: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  searchData() {
    console.log(this.search);
    this.pegawai = this.list_pegawai;
    if (this.search.length > 0) {
      this.pegawai = this.pegawai.filter(x => x.full_name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.pegawai = this.list_pegawai;
    }
  }

}
