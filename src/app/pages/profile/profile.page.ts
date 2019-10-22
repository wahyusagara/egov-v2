import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  listMenu = [
    {
      id: 1,
      name: "Identitas",
      url: "#"
    },
    {
      id: 1,
      name: "Keluarga",
      url: "#"
    },
    {
      id: 1,
      name: "Surat Keterangan",
      url: "#"
    },
    {
      id: 1,
      name: "Sertifikat",
      url: "#"
    },
    {
      id: 1,
      name: "SKP",
      url: "#"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
