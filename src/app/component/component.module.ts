import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDummyComponent } from "./form-dummy/form-dummy.component";

@NgModule({
  declarations: [
    FormDummyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDummyComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentModule { }
