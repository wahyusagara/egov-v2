import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntriDataPage } from './entri-data.page';
import { ComponentModule } from 'src/app/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: EntriDataPage
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
  declarations: [EntriDataPage],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EntriDataPageModule {}
