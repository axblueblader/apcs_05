import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SocketService } from '../socketio/socketio.service';
import { UserInfoService } from '../authentication/userInfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;
  registered = false;
  userID;

  onClick() {
    if (this.clicked) {
      this.clicked = false;
      this.stopSearch();
    } else {
      this.clicked = true;
      this.startSearch();
    }
  }

  constructor(public dialog: MatDialog,
              private socketService: SocketService,
              private userInfoService: UserInfoService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      this.initUserID(result);
    });
  }

  initUserID(data) {
    if (this.userID == undefined){
    let userInfo = data;

    this.userInfoService.setUserInfo(userInfo);

    let token = this.userInfoService.getToken();
    console.log(token);

    /* NAMING INCONSISTENCY
    TODO : REFACTOR NAMES */
    this.userID = token;
    }
  }

  startSearch() {
    this.registerID();

    const data = {
      userid: this.userID, // userid from db
      queueType: 'quick'  // queueType from options chose in screen
    };
    this.socketService.startSearch(data);
  }

  stopSearch() {
    this.socketService.stopSearch(this.userID);
  }

  registerID() {
    if (this.registered == false) {
      this.socketService.register(this.userID);
      this.registered = true;
    }
    console.log('REGISTERED ID: ',this.token);
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
