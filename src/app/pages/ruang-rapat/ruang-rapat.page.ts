import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruang-rapat',
  templateUrl: './ruang-rapat.page.html',
  styleUrls: ['./ruang-rapat.page.scss'],
})
export class RuangRapatPage implements OnInit {

  listRoom = [
    {
      name: "Lantai 1",
      desc: "In the room",
      img: "assets/img/meeting-room.jpeg"
    },
    {
      name: "Lantai 2",
      desc: "In the room",
      img: "assets/img/meeting-room.jpeg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event) {
    console.log(event);
  }

}
