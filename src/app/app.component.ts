import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Word } from './models/word';
import { WORDS } from './models/database';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  words: Word[] = WORDS;
  title = 'LetsWords';
  randomNumber: number;
  constructor() {
    this.randomNumber = Math.floor(Math.random()*this.words.length);
    console.log(this.randomNumber)
  }
}

