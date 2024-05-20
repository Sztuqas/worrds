import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Word } from './models/word';
import { WORDS } from './models/database';
import {NavComponent} from "./menu/nav/nav.component";
import {WordListComponent} from "./word-list/word-list.component";

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
    WordListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  words: Word[] = WORDS;
  title = 'LetsWords';


  ngOnInit(): void{};
}


