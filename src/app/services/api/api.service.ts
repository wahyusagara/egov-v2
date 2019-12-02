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

  login(user, pass?) {
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
  getData(url, id?, atasan_nip?, nip?) {
    return new Promise((resolve, reject) => {
      var option = {}
      if (id || atasan_nip || nip) {
        id ? this.headers = this.headers.set('id', id) : this.headers = this.headers.set('id', '');
        atasan_nip ? this.headers = this.headers.set('atasan_nip', atasan_nip) : this.headers = this.headers.set('atasan_nip', '');
        nip ? this.headers = this.headers.set('nip', nip) : this.headers = this.headers.set('nip', '');
        option = {
          headers: this.headers
        }
      }
      
      this.httpClt.get(
        url, option
        // {
        //   headers: this.headers,
        // }
      ).subscribe(
        res => { resolve(res); },
        err => { reject(err); }
      );
    });
  }
  insertData(data) {
    return new Promise((resolve, reject) => {
      this.httpClt.post("https://egov-big.herokuapp.com/api/upload-atasan", data).subscribe(
        res => { resolve(res); },
        err => { reject(err) }
      )
    })
  }
  getAtasan(url, search?) {
    return new Promise((resolve, reject) => {
      search ? this.headers = this.headers.set('search', search) : this.headers = this.headers.set('search', "");
      this.httpClt.get(
        url,
        {
          headers: this.headers,
        }
      ).subscribe(
        res => { resolve(res); },
        err => { reject(err); }
      );
    });
  }
  pushNotif(data) {
    const url = "https://egov-big.herokuapp.com/api/send-notif"
    return new Promise((resolve, reject) => {
      this.httpClt.post(url, data).subscribe(
        res => { resolve(res) },
        err => { reject(err) }
      )
    });
  }
  uploadId(nip:string, device_id:string) {
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
  postData(url, data) {
    return new Promise((resolve, reject) => {
      this.httpClt.post(url, data, {
        headers: new HttpHeaders()
      }).subscribe(
        res => { resolve(res) },
        err => { reject(err) }
      );
    });
  }
  hello_worlds() {
    this.httpClt.get('https://egov-big.herokuapp.com/api/testget')
  }
}
