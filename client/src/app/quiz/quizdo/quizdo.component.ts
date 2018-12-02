import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuizdataService} from '../quizdata.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  }

  imgClick(color: string) {
    console.log(color);
    console.log(this.currQuest);
    if (this.currQuest < (this.quizList.length - 1)) {
      this.currQuest++;
      this.quizDataService.addResult(color);
    } else {
      this.quizDataService.addResult(color);
      this.router.navigate(['../result'], {relativeTo: this.route});
    }

  }
}
