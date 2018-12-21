import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SocketService } from '../socketio/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked;
  userID;

  onClick() {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }

  constructor(public dialog: MatDialog,
              private socketService: SocketService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  startSearch() {
    const data = {
      userid: this.userID, // userid from db
      queueType: 'quick'  // queueType from options chose in screen
    };
    this.socketService.startSearch(data);
  }

  stopSearch() {
    this.socketService.stopSearch(this.userID);
  }

  initSocketEventHandler() {
    this.socketService.onWaitingInQueue().subscribe((data) => {
      // Show waiting animation and message
    });

    this.socketService.onFoundMatch().subscribe((data) => {
      // Show found match and navigate to quiz page
    });
  }

  ngOnInit() {
    this.socketService.initSocket();
    this.initSocketEventHandler();
  }

}
