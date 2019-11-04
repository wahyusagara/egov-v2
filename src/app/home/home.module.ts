import { NgModule } from '@angular/core';
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
    IonicModule,
    ComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [
    TabmenusComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
