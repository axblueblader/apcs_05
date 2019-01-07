import { Component, OnInit } from '@angular/core';
import {QuizdataService} from '../quizdata.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quizresult',
  templateUrl: './quizresult.component.html',
  styleUrls: ['./quizresult.component.css']
})
export class QuizresultComponent implements OnInit {

  public quizList;
  private resultList;
  private partnerRes;
  constructor(
    private quizDataService: QuizdataService,
    private router: Router) { }

  ngOnInit() {
    this.quizList = this.quizDataService.getList();
    this.resultList = this.quizDataService.getResult();
    console.log(this.resultList);
    this.partnerRes = this.quizDataService.getPartnerRes();
    console.log(this.partnerRes);
  }

  onToChatClicked() {
    this.router.navigate(['chat']);
  }

  onLeaveClicked() {
    this.router.navigate(['/']);
  }
}
