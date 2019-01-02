import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';



interface Server {
  capacity: number;
  id: number;
  name: string;
}

@Injectable()
export  class  QuizdataService {
  private quizList = [
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
  ];
  private quizRes = [];
  private partnerRes = ['left', 'right', 'right', 'left', 'right', 'left', 'left', 'right' ];

  servers: Observable<Server[]>;


  constructor (private http: HttpClient) { }

  addResult (result: string) {
    this.quizRes.push(result);
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
    const headers = new HttpHeaders({'token': 'da0dbbf8faa976fe18ca33c95efb05b968b21b3f8786875dd08065687ed3853f'});
    this.http
      .put('http://localhost:3000/quizz/loadquestion', { } , {headers})
      .subscribe(
        val => {
          console.log('Get call successful value returned in body',
            val);
        },
        response => {
          console.log('Get call in error', response);
        },
        () => {
          console.log('The Get observable is now completed.');
        }
      );

  }
}
