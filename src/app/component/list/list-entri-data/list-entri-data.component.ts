import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-entri-data',
  templateUrl: './list-entri-data.component.html',
  styleUrls: ['./list-entri-data.component.scss'],
})
export class ListEntriDataComponent implements OnInit {
  listMenu = [
    {
      id: 1,
      name: "Log Book",
      url: "/helpdesk-kepegawaian"
    },
    {
      id: 2,
      name: "Layanan Kepegawaian",
      url: "/home"
    },
    {
      id: 3,
      name: "Perjalanan Dinas",
      url: "/perjalanan-dinas"
    },
    {
      id: 4,
      name: "Perjalanan Meeting",
      url: "/home"
    },
    {
      id: 5,
      name: "Laporan Perjalanan Dinas",
      url: "/home"
    },
    {
      id: 6,
      name: "Cuti Tahunan",
      url: "/izin-cuti"
    },
    {
      id: 7,
      name: "Cuti Atasan Penting",
      url: "/izin-cuti"
    },
    {
      id: 8,
      name: "Layanan Kendaraan",
      url: "/home"
    },
    {
      id: 9,
      name: "Layanan Ruang Rapat",
      url: "/home"
    },
    {
      id: 10,
      name: "Layanan Peralatan",
      url: "/home"
    },
    {
      id: 11,
      name: "Izin Sakit",
      url: "/izin-cuti"
    },
    {
      id: 12,
      name: "Layanan Keamanan",
      url: "/home"
    },
    {
      id: 13,
      name: "Layanan Arsip",
      url: "/home"
    },
    {
      id: 14,
      name: "Izin Pulang Sebelum Waktu",
      url: "/home"
    },
  ]

  constructor() { }

  ngOnInit() {}

}
