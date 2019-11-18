import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaPage implements OnInit {
  berita: SafeHtml;
  id:number;
  resp:any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private dom: DomSanitizer
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getParams();
  }
  ionViewDidEnter() {
    this.getBeritaDetail();
  }
  getParams() {
    this.route.queryParams.subscribe(params => {
      this.id = parseInt(params['id']);
      // console.log(this.id);
    })
  }
  async getBeritaDetail() {
    return this.api.getData('https://sdm.big.go.id/siap/service/index.php/pegawai/berita?BERITA_ID=' + this.id)
    .then(async (result) => {
      this.resp = await JSON.parse(JSON.stringify(result[0]));
      this.berita = this.dom.bypassSecurityTrustHtml(this.resp.BERITA_ISI);
    }).catch((err) => {

    });
  }

}
