import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDummyComponent } from "./form-dummy/form-dummy.component";
import { IonicSelectableModule } from "ionic-selectable";
import {TabmenusComponent} from './tabmenus/tabmenus.component';

@NgModule({
  declarations: [
    FormDummyComponent,
    TabmenusComponent
  ],
  imports: [
    CommonModule,
    IonicSelectableModule
  ],
  exports: [
    FormDummyComponent,
    TabmenusComponent
  ],
  entryComponents: [TabmenusComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentModule { }
