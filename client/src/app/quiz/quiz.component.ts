import { Component, OnInit } from '@angular/core';
import {QuizdataService} from './quizdata.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizdataService]
})
export class QuizComponent implements OnInit {


  state: string;

  constructor() {}

  ngOnInit() {
    this.state = 'do';
  }

  swapComp() {
    this.state = 'result';
  }
}
