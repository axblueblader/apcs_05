import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {UserInfoService} from '../authentication/userInfo.service';

interface Question {
  firstchoice: {imgName: string, imgPath: string};
  secondchoice: {imgName: string, imgPath: string};
  id: string;
  __v: number;
}

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

interface LoadQuizzResp {
  Status: string;
  data: Question[];
}

interface QuizzSubmitResp {
  Status: string;
  data: Answer;
}


@Injectable()
export  class  QuizdataService {



  private quizList = [];
  private quizRes = '';
  private partnerRes = '';



  constructor (private http: HttpClient, private userInfo: UserInfoService) { }

  addResult (result: string) {
    console.log(this.quizRes);
    this.quizRes = this.quizRes + result;
    console.log(this.quizRes);
  }
  getList() {
    return this.quizList;
  }
  getResult() {
    return this.quizRes;
  }
  getPartnerRes() {
    return this.partnerRes;
  }

  getQuiz() {
    // let headers = new HttpHeaders();
    // headers = headers.set('token', 'da0dbbf8faa976fe18ca33c95efb05b968b21b3f8786875dd08065687ed3853f');
    // console.log(headers);
    const token = this.userInfo.getToken();
    const headers = new HttpHeaders({'token': token});
    this.http
      .put<LoadQuizzResp>('http://localhost:3000/quizz/loadquestion', { } , {headers})
      .subscribe(
        val => {
          console.log('Return status: ', val.Status);
          console.log('Data: ', val.data);
          this.putQuestion(val.data);
        },
        response => {
          console.log('PUT call in error', response);
        },
        () => {
          console.log('The PUT observable is now completed.');
        }
      );
  }

  private putQuestion(svList: Question[]) {
    for (const currQ of svList) {
      const prefix = 'http://localhost:3000/';
      let left = currQ.firstchoice.imgPath;
      left = left.replace('\\', '/');
      left = prefix + left;

      let right = currQ.secondchoice.imgPath;
      right = right.replace('\\', '/');
      right = prefix + right;

      console.log(left, right);

      this.quizList.push({left: left, right: right});
    }
  }

  submitQuizz(): Observable<QuizzSubmitResp> {
    const partnerid = this.userInfo.getPartnerId();
    const token = this.userInfo.getToken();

    console.log(partnerid);

    const headers = new HttpHeaders({'token': token});

    return this.http.put<QuizzSubmitResp>('http://localhost:3000/quizz/startquizz', {'userAns': this.quizRes, 'partnerID': partnerid}, {headers});


  }
}
