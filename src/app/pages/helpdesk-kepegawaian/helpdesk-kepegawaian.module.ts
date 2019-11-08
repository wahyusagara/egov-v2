import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpdeskKepegawaianPage } from './helpdesk-kepegawaian.page';
import { ComponentModule } from "../../component/component.module";

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
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [HelpdeskKepegawaianPage],
  
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HelpdeskKepegawaianPageModule {}
