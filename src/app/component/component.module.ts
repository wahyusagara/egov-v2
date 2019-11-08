import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDummyComponent } from "./form-dummy/form-dummy.component";
import { IonicSelectableModule } from "ionic-selectable";
// import { TabmenusComponent} from './tabmenus/tabmenus.component';
import { TabmenusComponent } from "./global/tabmenus/tabmenus.component";
import { CalendarComponent } from "./thirdpaty/calendar/calendar.component";
import { IonicModule } from '@ionic/angular';

// Component List
import { SliderComponent } from "./global/slider/slider.component";
// import { TabmenusComponent } from "./global/tabmenus/tabmenus.component";

@NgModule({
  declarations: [
    FormDummyComponent,
    TabmenusComponent,
    SliderComponent,
    CalendarComponent
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
    CalendarComponent
  ],
  // entryComponents: [TabmenusComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentModule { }
