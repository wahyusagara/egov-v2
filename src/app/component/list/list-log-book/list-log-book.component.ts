import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-log-book',
  templateUrl: './list-log-book.component.html',
  styleUrls: ['./list-log-book.component.scss'],
})
export class ListLogBookComponent implements OnInit {
  date = new Date();
  hari = [
    'Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'
  ];

  constructor() { }

  ngOnInit() {}

}
