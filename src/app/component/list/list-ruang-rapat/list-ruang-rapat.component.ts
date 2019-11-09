import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ruang-rapat',
  templateUrl: './list-ruang-rapat.component.html',
  styleUrls: ['./list-ruang-rapat.component.scss'],
})
export class ListRuangRapatComponent implements OnInit {
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
  hasilSearch = [];
  constructor() { }

  ngOnInit() {}

}
