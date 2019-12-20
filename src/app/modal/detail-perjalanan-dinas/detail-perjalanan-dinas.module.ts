import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPerjalananDinasPage } from './detail-perjalanan-dinas.page';
import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: DetailPerjalananDinasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPerjalananDinasPage]
})
export class DetailPerjalananDinasPageModule {}
