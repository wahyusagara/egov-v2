import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import {ComponentModule} from '../component/component.module';
import {TabmenusComponent} from '../component/tabmenus/tabmenus.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [TabmenusComponent],
  exports: [
    TabmenusComponent
  ],
  declarations: [HomePage,TabmenusComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
