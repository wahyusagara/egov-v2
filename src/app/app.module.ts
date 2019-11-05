import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtasanPageModule } from './popover/atasan/atasan.module';
import { AgendaPageModule } from "./popover/agenda/agenda.module";
import { HTTP } from '@ionic-native/http/ngx';
import { FCM } from "@ionic-native/fcm/ngx";

import {ComponentModule} from './component/component.module';
import {TabmenusComponent} from './component/tabmenus/tabmenus.component';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [TabmenusComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AtasanPageModule,
    AgendaPageModule,
    ComponentModule
  ],
  exports: [
    TabmenusComponent
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
