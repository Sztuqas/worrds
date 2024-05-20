import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {NavComponent} from "./menu/nav/nav.component";
import {WordListComponent} from "./word-list/word-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, WordListComponent],
  imports: [BrowserModule, CommonModule, NavComponent, WordListComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
