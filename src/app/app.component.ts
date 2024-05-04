import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Word } from './models/word';
import { WORDS } from './models/database';
import {NavComponent} from "./menu/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  words: Word[] = WORDS;
  title = 'LetsWords';
  randomNumber: number;
  inWord: any;

  constructor() {
    this.inWord="";
    this.randomNumber = Math.floor(Math.random()*this.words.length);

      }
  compareWord() {
    const index = this.words.findIndex(word => word.english === this.inWord);
    if (index===this.randomNumber) {
      console.log("Poprawna odpowiedź");
      window.location.reload();
      this.inWord="";
    } else {
      console.log("Źle");
      this.inWord="";
    }

  }
  }



