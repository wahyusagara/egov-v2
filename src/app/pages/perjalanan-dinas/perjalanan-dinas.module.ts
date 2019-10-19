import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerjalananDinasPage } from './perjalanan-dinas.page';
import { IonicSelectableModule } from "ionic-selectable";

const routes: Routes = [
  {
    path: '',
    component: PerjalananDinasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule
  ],
  declarations: [PerjalananDinasPage]
})
export class PerjalananDinasPageModule {}
