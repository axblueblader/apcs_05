import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizdataService} from './quizdata.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizdataService]
})
export class QuizComponent implements OnInit {
    private subscription;

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
      this.router.navigate(['do'], {relativeTo: this.route});
  }

}
