import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders();

  constructor(
    private httpClt: HttpClient
  ) {
    // this.headers = this.headers.set('Content-Type', 'application/json');
    // this.headers = this.headers.set('Accept', 'application/json');
  }

  login(user, pass) {
    // FOR EASY DEVELOPMENT
    // if (user === '' && pass === '') {
    //   user = 'dat4aks3s';
    //   pass = 'c1b1n0ng';
    // }
    return new Promise((resolve, reject) => {
      // this.headers = this.headers.set('Content-Type', 'multipart/form-data');
      // this.headers = this.headers.set('Authorization', 'Basic ZGF0NGFrczNzOmMxYjFuMG5n');
      // this.headers = this.headers.append('enctype', 'multipart/form-data');
      // this.headers = this.headers.set('Authorization', 'Basic ZGF0NGFrczNzOmMxYjFuMG5n');
      // let body = new FormData();
      // body.set('username', user);
      // body.set('password', pass);
      // const url = "https://sdm.big.go.id/siap/siap.php/rest/biodatapegawai/get_pegawai_byid?namaornip=199111252019031002";
      // const url = 'https://egov-big.herokuapp.com/api/login2';
      const url = `https://sdm.big.go.id/siap/service/index.php/pegawai?NIPBARU=${user}`;
      // const body = "username=" + user + "&password=" + pass;
      // console.log(body);
      this.httpClt.get(
        url
        // {
        //   headers: new Headers(),
        //   username: user,
        //   password: pass
        // }
      ).subscribe(
        res => { resolve(res); },
        err => { reject(err); }
      );
    });
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      this.httpClt.get(url, {headers: this.headers}).subscribe(
        res => { resolve(res); },
        err => { reject(err); }
      );
    });
  }
  uploadId(nip, device_id) {
    const url = 'https://egov-big.herokuapp.com/api/insert-id';
    this.headers = this.headers.set('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      const body = {
        "nip": nip,
	      "device_id": device_id
      }
      this.httpClt.post(url, body, {
        headers: this.headers
      }).subscribe(
        res => { resolve(res); },
        err => { reject(err); }
      )
    })
  }
}
