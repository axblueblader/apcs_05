import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked;

  onClick() {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
