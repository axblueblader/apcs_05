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
  private partnerRes;
  constructor(private quizDataService: QuizdataService) { }

  ngOnInit() {
    this.quizList = this.quizDataService.getList();
    this.resultList = this.quizDataService.getResult();
    console.log(this.resultList);
    this.partnerRes = this.quizDataService.getPartnerRes();
    console.log(this.partnerRes);
  }

}
