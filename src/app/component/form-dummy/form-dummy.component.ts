import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-dummy',
  templateUrl: './form-dummy.component.html',
  styleUrls: ['./form-dummy.component.scss'],
})
export class FormDummyComponent implements OnInit {
  @Input() dataId:number;
  @Output() data = new EventEmitter();
  listAtasan = [
    {
      id: 1,
      name: "Atasan 1"
    },
    {
      id: 2,
      name: "Atasan 2"
    },
    {
      id: 3,
      name: "Atasan 3"
    }
  ]

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  submit() {
    this.navCtrl.back({
      animated: true
    });
  }

  onChange(event) {
    // console.log(event);
    const dataReturn = {
      id: this.dataId,
      ...this.data
    }
    this.data.emit(dataReturn);
  }
  onSearchChange(event) {
    // console.log(event);
  }

}
