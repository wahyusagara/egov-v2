import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDummyComponent } from "./form-dummy/form-dummy.component";
import { IonicSelectableModule } from "ionic-selectable";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
// import { CalendarModule } from 'ion2-calendar';

// Component List

/* Global */
import { SliderComponent } from "./global/slider/slider.component";
import { TabmenusComponent } from "./global/tabmenus/tabmenus.component";

/* Thirdparty */
import { CalendarComponent } from "./thirdpaty/calendar/calendar.component";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartjsComponent } from "./thirdpaty/chartjs/chartjs.component";

/* List */
import { ListMenuComponent } from "./list/list-menu/list-menu.component";
import { ListIzinCutiComponent } from "./list/list-izin-cuti/list-izin-cuti.component";
import { ListPerjanalanDinasComponent } from "./list/list-perjanalan-dinas/list-perjanalan-dinas.component";
import { ListKendaraanComponent } from "./list/list-kendaraan/list-kendaraan.component";
import { ListRuangRapatComponent } from "./list/list-ruang-rapat/list-ruang-rapat.component";
import { ListLogBookComponent } from "./list/list-log-book/list-log-book.component";
import { ListMenuLainComponent } from "./list/list-menu-lain/list-menu-lain.component";
import { ListEntriDataComponent } from "./list/list-entri-data/list-entri-data.component";
import { ListProfileComponent } from "./list/list-profile/list-profile.component";
import { ListPerjalananDinasApprovalComponent } from "./list/list-perjalanan-dinas-approval/list-perjalanan-dinas-approval.component";
import { TestingComponent } from "./global/testing/testing.component";
import { CreatePerjalananDinasComponent } from './form/create-perjalanan-dinas/create-perjalanan-dinas.component';
import { ListNotifComponent } from "./list/list-notif/list-notif.component";

@NgModule({
  declarations: [
    FormDummyComponent,
    TabmenusComponent,
    SliderComponent,
    CalendarComponent,
    ListMenuComponent,
    ListIzinCutiComponent,
    ListPerjanalanDinasComponent,
    ListKendaraanComponent,
    ListRuangRapatComponent,
    ListLogBookComponent,
    ListMenuLainComponent,
    ListEntriDataComponent,
    ListProfileComponent,
    ChartjsComponent,
    TestingComponent,
    ListPerjalananDinasApprovalComponent,
    CreatePerjalananDinasComponent,
    ListNotifComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    IonicSelectableModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  exports: [
    FormDummyComponent,
    TabmenusComponent,
    SliderComponent,
    CalendarComponent,
    ListMenuComponent,
    ListIzinCutiComponent,
    ListPerjanalanDinasComponent,
    ListKendaraanComponent,
    ListRuangRapatComponent,
    ListLogBookComponent,
    ListMenuLainComponent,
    ListEntriDataComponent,
    ListProfileComponent,
    ChartjsComponent,
    TestingComponent,
    ListPerjalananDinasApprovalComponent,
    CreatePerjalananDinasComponent,
    ListNotifComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ComponentModule { }
