import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuizdataService} from '../quizdata.service';
import {ActivatedRoute, Router} from '@angular/router';


interface Answer {
  ans1: string;
  ans2: string;
  quizzStatus: string;
  grades: number;
  id: string;
  userID: string;
  partnerID: string;
  __v;
}

interface QuizzSubmitResp {
  Status: string;
  data: Answer;
}

@Component({
  selector: 'app-quizdo',
  templateUrl: './quizdo.component.html',
  styleUrls: ['./quizdo.component.css']
})

export class QuizdoComponent implements OnInit {
  private quizList;
  private currQuest: number;
  @Output() private changeState = new EventEmitter<void>();

  constructor(private quizDataService: QuizdataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizList  = this.quizDataService.getList();
    this.currQuest = 0 ;
    console.log(this.quizList.length);
    this.quizDataService.getQuiz();
  }

  imgClick(color: string) {
    console.log(color);
    console.log(this.currQuest);
    if (this.currQuest < (this.quizList.length - 1)) {
      this.currQuest++;
      this.quizDataService.addResult(color);
    } else {
      this.quizDataService.addResult(color);
      this.quizDataService.submitQuizz()
        .subscribe(
          val => {
            console.log('Return status: ', val.Status);
            console.log('Data: ', val.data);
            if (val.data.quizzStatus === 'Get Grades Success') {
              this.router.navigate(['../result'], {relativeTo: this.route});
            }
          },
          response => {
            console.log('PUT call in error', response);
          },
          () => {
            console.log('The PUT observable is now completed.');
          }
        ) ;

    }

  }
}
