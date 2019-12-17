import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtasanPageModule } from './popover/atasan/atasan.module';
import { AgendaPageModule } from "./popover/agenda/agenda.module";
import { ApprovalPerjadinPageModule } from "./popover/approval-perjadin/approval-perjadin.module";
import { HTTP } from '@ionic-native/http/ngx';
import { FCM } from "@ionic-native/fcm/ngx";
import { HttpClientModule } from "@angular/common/http";
import { DetailPerjalananDinasPageModule } from './modal/detail-perjalanan-dinas/detail-perjalanan-dinas.module';

// import {ComponentModule} from './component/component.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AtasanPageModule,
    AgendaPageModule,
    ApprovalPerjadinPageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DetailPerjalananDinasPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
