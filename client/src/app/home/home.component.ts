import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { SocketService } from '../socketio/socketio.service';
import { UserInfoService } from '../authentication/userInfo.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;
  registered = false;
  userID = undefined;
  userName = undefined;
  private _onWaitingQueueSub: Subscription;
  private _onFoundMatchSub: Subscription;

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
              private router: Router,
              private route: ActivatedRoute,
              private socketService: SocketService,
              private userInfoService: UserInfoService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result != "") {this.initUserID(result)};
    });
  }

  initUserID(data) {
    if (this.userID == undefined){

    this.userInfoService.setUserInfo(data);

    let token = this.userInfoService.getToken();
    console.log("Get token in home component",token);

    /* NAMING INCONSISTENCY
    TODO : REFACTOR NAMES */
    this.userID = this.userInfoService.getUserInfo().data._id;
    this.userName = this.userInfoService.getUserInfo().data.userName;
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
      this.userInfoService.setRegisteredSocket(true);
    }
    console.log('REGISTERED ID: ',this.userID);
  }
  initSocketEventHandler() {
    this._onWaitingQueueSub = this.socketService.onWaitingInQueue().subscribe((data) => {
      // Show waiting animation and message
    });

    this._onFoundMatchSub = this.socketService.onFoundMatch().subscribe((data) => {
      // Show found match and navigate to quiz page
      console.log('Found a match');
      this.clicked = false;
      this.userInfoService.setPartnerId(data);
      this.router.navigate(['chat']); 
    });
  }

  ngOnInit() {
    if(this.socketService.isUndefined()) {
      this.socketService.initSocket();
    }
    else {
      this.userID = this.userInfoService.getUserInfo().data._id;
      this.userName = this.userInfoService.getUserInfo().data.userName;
    }

    this.initSocketEventHandler();
    this.registered = this.userInfoService.getRegisteredSocket();
    this.clicked = false;
  }

  ngOnDestroy() {
    this._onFoundMatchSub.unsubscribe();
    this._onWaitingQueueSub.unsubscribe();
  }

}
