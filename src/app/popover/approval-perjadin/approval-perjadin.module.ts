import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApprovalPerjadinPage } from './approval-perjadin.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovalPerjadinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovalPerjadinPage]
})
export class ApprovalPerjadinPageModule {}
