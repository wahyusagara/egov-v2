import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KendaraanPage } from './kendaraan.page';
import { ComponentModule } from "../../component/component.module";

const routes: Routes = [
  {
    path: '',
    component: KendaraanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [KendaraanPage]
})
export class KendaraanPageModule {}
