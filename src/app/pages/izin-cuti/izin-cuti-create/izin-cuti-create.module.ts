import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IzinCutiCreatePage } from './izin-cuti-create.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [IzinCutiCreatePage]
})
export class IzinCutiCreatePageModule {}
