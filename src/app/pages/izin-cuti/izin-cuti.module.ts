import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IzinCutiPage } from './izin-cuti.page';
import { ComponentModule } from "../../component/component.module";

const routes: Routes = [
  {
    path: '',
    component: IzinCutiPage
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
  declarations: [IzinCutiPage]
})
export class IzinCutiPageModule {}
