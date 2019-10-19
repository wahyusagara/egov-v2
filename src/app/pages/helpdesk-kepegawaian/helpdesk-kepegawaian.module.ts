import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpdeskKepegawaianPage } from './helpdesk-kepegawaian.page';

const routes: Routes = [
  {
    path: '',
    component: HelpdeskKepegawaianPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpdeskKepegawaianPage]
})
export class HelpdeskKepegawaianPageModule {}
