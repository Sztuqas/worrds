import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {NavComponent} from "./menu/nav/nav.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, NavComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
