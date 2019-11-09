import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KehadiranPage } from './kehadiran.page';
import { ComponentModule } from "../../component/component.module";

const routes: Routes = [
  {
    path: '',
    component: KehadiranPage
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
  declarations: [KehadiranPage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class KehadiranPageModule {}
