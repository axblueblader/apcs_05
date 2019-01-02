import {HttpClient, HttpResponse} from '@angular/common/http';
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

  getQuiz(): Observable<HttpResponse<Server>> {
    return this.http
      .get<Server>('http://127.0.0.1:3000/loadquestion', {observe: 'response'} );

  }
}
