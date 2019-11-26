import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  data = { myToggle: true };

  constructor() { }

  ngOnInit() {}

  isClicked() {
    this.data.myToggle = !this.data.myToggle;
  }

}
