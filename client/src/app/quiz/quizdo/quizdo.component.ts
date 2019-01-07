import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizdataService} from '../quizdata.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInfoService} from '../../authentication/userInfo.service';
import {CanComponentDeactivate} from './can-deactivate.guard';
import {Observable} from 'rxjs';
import {animate, query, state, style, transition, trigger} from '@angular/animations';
import {delay} from 'q';


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
  styleUrls: ['./quizdo.component.css', './skeleton.scss', './loading.css'],
  animations: [
    trigger('nextQuestion', [
      state('gone', style({
        opacity: 0
      })),
      state('full', style({
        opacity: 1
      })),
      transition('full => gone', [
        query('img', animate(300))
      ]),
      transition('gone => full', [
        query('img', animate(300))
      ])
    ])
  ]
})

export class QuizdoComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private quizList;
  private currQuest: number;
  private alive: boolean;
  private interval;
  private finished: boolean;
  private animState: string;
  public waiting: boolean;

  constructor(private quizDataService: QuizdataService,
              private router: Router,
              private route: ActivatedRoute,
              private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.quizList  = this.quizDataService.getList();
    this.quizDataService.getQuiz();
    this.currQuest = 0 ;
    this.alive = true;
    this.finished = false;
    this.waiting = false;
    console.log(this.quizList);
    this.animState = 'full';
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  imgClick(color: string) {
    this.animState = 'gone';
    console.log(color);
    console.log(this.currQuest);
    if (this.currQuest < (this.quizList.length - 1)) {
      setTimeout(() => {
        this.currQuest++;
        this.quizDataService.addResult(color);
         this.animState = 'full';
      }, 300);
    } else {
      this.waiting = true;
      this.quizDataService.addResult(color);
      if (this.userInfoService.getToken() != null) {
        this.interval = setInterval(
          () => {
            this.quizDataService.submitQuizz()
              .subscribe(
                val => {
                  console.log('Return status: ', val.Status);
                  console.log('Data: ', val.data);
                  if (val.Status === 'Get Grades Success') {
                    this.finished = true;
                    this.quizDataService.setPartnerRes(val.data.ans1, val.data.ans2);
                    this.router.navigate(['../result'], {relativeTo: this.route});
                  } else if ((val.Status === 'Time Out') || (val.data.quizzStatus === 'Terminated')) {
                    alert('Your partner has left');
                    this.finished = true;
                    this.router.navigate(['/']);
                  }
                },
                response => {
                  console.log('PUT call in error', response);
                },
                () => {
                  console.log('The PUT observable is now completed.');
                }
              );
          }, 3000
        );
      } else {
        this.finished = true;
        this.quizDataService.setPartnerRes('0', '0');
        this.router.navigate(['../result'], {relativeTo: this.route});
      }


      // this.quizDataService.submitQuizz()
      //   .subscribe(
      //     val => {
      //       console.log('Return status: ', val.Status);
      //       console.log('Data: ', val.data);
      //       if (val.Status === 'Get Grades Success') {
      //         this.quizDataService.setPartnerRes(val.data.ans2);
      //         this.router.navigate(['../result'], {relativeTo: this.route});
      //       }
      //     },
      //     response => {
      //       console.log('PUT call in error', response);
      //     },
      //     () => {
      //       console.log('The PUT observable is now completed.');
      //     }
      //   ) ;

    }

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.finished && (this.quizList.length > 2)) {
      if (confirm('Are you sure you want to quit ?')) {
          this.quizDataService.terminateQuizz()
            .subscribe(
              value => {
                console.log(value);
              }
            );
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

}
