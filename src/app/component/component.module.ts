import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDummyComponent } from "./form-dummy/form-dummy.component";
import { IonicSelectableModule } from "ionic-selectable";
import { IonicModule } from '@ionic/angular';

// Component List
import { SliderComponent } from "./global/slider/slider.component";
import { TabmenusComponent } from "./global/tabmenus/tabmenus.component";
import { CalendarComponent } from "./thirdpaty/calendar/calendar.component";
import { ListMenuComponent } from "./list/list-menu/list-menu.component";

@NgModule({
  declarations: [
    FormDummyComponent,
    TabmenusComponent,
    SliderComponent,
    CalendarComponent,
    ListMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    IonicSelectableModule
  ],
  exports: [
    FormDummyComponent,
    TabmenusComponent,
    SliderComponent,
    CalendarComponent,
    ListMenuComponent
  ],
  // entryComponents: [TabmenusComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentModule { }
