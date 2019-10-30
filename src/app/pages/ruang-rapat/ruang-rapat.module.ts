import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RuangRapatPage } from './ruang-rapat.page';

const routes: Routes = [
  {
    path: '',
    component: RuangRapatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RuangRapatPage]
})
export class RuangRapatPageModule {}
