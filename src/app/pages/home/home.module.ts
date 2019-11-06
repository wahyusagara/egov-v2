import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CalendarModule } from 'ion2-calendar';

import { ComponentModule } from "../../component/component.module";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule,
    ComponentModule
  ],
  declarations: [HomePage],
  
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
