import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IzinCutiCreatePage } from './izin-cuti-create.page';
import { ComponentModule } from "../../../component/component.module";

const routes: Routes = [
  {
    path: '',
    component: IzinCutiCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IzinCutiCreatePage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IzinCutiCreatePageModule {}
