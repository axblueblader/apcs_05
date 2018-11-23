import { Component, OnInit } from '@angular/core';
import {QuizdataService} from '../quizdata.service';

@Component({
  selector: 'app-quizresult',
  templateUrl: './quizresult.component.html',
  styleUrls: ['./quizresult.component.css']
})
export class QuizresultComponent implements OnInit {

  private quizList;
  private resultList;
  constructor(private quizDataService: QuizdataService) { }

  ngOnInit() {
    this.quizList = this.quizDataService.getList();
    this.resultList = this.quizDataService.getResult();
  }

}
