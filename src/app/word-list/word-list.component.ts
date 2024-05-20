import {Component, Input, OnInit,} from '@angular/core';
import {Word} from "../models/word";
import {CommonModule} from "@angular/common";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [FormsModule,CommonModule, MatFabButton, MatIcon, ReactiveFormsModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent implements OnInit {


  @Input() word: Word[] = [];
  randomWord: Word = {polish: '', english: ''}
  inWord:string= "";
  isMatch: boolean | null = null;
  randomNumber: number = 0;

  ngOnInit(): void {
    this.getRandomNumber()
  }


  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * this.word.length);
    this.randomWord = this.word[this.randomNumber]
    return this.randomWord;
  }


  checkWord(): void {
    this.isMatch = this.inWord.toLowerCase() === this.randomWord.english.toLowerCase();
    if(this.isMatch){
      this.getRandomNumber() ;
      this.inWord= "";
    }
    this.inWord= "";
  }
 isWordMarched(){
   return this.isMatch !== null && this.isMatch === true ;
 }

  isWordNotMatched(): boolean {
    return this.isMatch !== null && this.isMatch === false;
  }

}
