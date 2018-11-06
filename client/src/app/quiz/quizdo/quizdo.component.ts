import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizdo',
  templateUrl: './quizdo.component.html',
  styleUrls: ['./quizdo.component.css']
})
export class QuizdoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgClick(color: string) {
    console.log(color);
  }
}
