import {AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, OnDestroy} from '@angular/core';
import { SocketService } from '../socketio/socketio.service';
import { UserInfoService } from '../authentication/userInfo.service';
<<<<<<< HEAD
import {ActivatedRoute, Router} from '@angular/router';
import { observable, Subscription } from 'rxjs';
=======
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {VoiceCallDialogComponent} from '../voice-call-dialog/voice-call-dialog.component';
import {CallRecieveDialogComponent} from '../call-recieve-dialog/call-recieve-dialog.component';




>>>>>>> feature-call
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


<<<<<<< HEAD

export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
=======
export class ChatComponent implements OnInit, AfterViewChecked {
>>>>>>> feature-call
  @ViewChild('msgbox') msgbox: ElementRef;
  @ViewChild('newMsg') inputfield: ElementRef;
  msg_list: {
    msg: string,
    owner: string,
  }[] = [];

  private userID;
  private leftChat;
  private _newMessageSub: Subscription;
  private _onLeftChatSub: Subscription;


  ngOnInit() {
    // setInterval(
    //   () => {
    //     this.msg_list.push({msg: 'partner send', owner: 'partner'});
    //   }
    //   , 10000);

<<<<<<< HEAD
    this.userID = this.userInfoService.getUserInfo().data._id;

    this.leftChat = false;

      this._newMessageSub = this.socketService.onNewMessage().subscribe((data) => {
        console.log('recieved message: ', data);
        this.msg_list.push({msg: data, owner: 'partner'});
      });
  
      this._onLeftChatSub = this.socketService.onLeftChat().subscribe((data) => {
        alert("Partner left the chat");
        this.leftChat = true;
        this.router.navigate(['']);
      })
    
=======
    this.userID = this.userInfoService.getToken();
    window['audio_out'] = document.getElementById('aud-box')

    this.socketService.onNewMessage().subscribe((data) => {
      console.log('recieved message: ', data);
      this.msg_list.push({msg: data, owner: 'partner'});
    });

    this.socketService.onCallComing().subscribe((data) => {
      console.log('on call coming', 'on');
      if (data === 'voice') {
        this.openDialog(data);
        console.log('on voice call', 'on');
        return;
      }
      if (data === 'video') {
        this.openDialog(data);
        return;
      }
    });

    this.socketService.onCallAccepted().subscribe((data) => {
      console.log('data', data);
      console.log('on call accepted', 'on');
      if (data.type === 'voice') {
        console.log('test','test');
        this.openVoiceCallWindow(data.toUserid);
      }
      else {
        this.openVideoCallWindow(data.toUserid);
      }
    });
>>>>>>> feature-call
  }


  addMsg(value: string) {
    this.msg_list.push({msg: value, owner: 'me'});
    this.inputfield.nativeElement.value = '';
    console.log( this.msgbox.nativeElement.clientHeight);
    console.log(this.msgbox.nativeElement.scrollTop);
    console.log(this.msgbox.nativeElement.scrollHeight);

    let data = {
      userid: this.userID,
      msg: value
    }
    this.socketService.sendMessage(data);
  }

  leaveChat() {
    this.socketService.leaveChat(this.userID);
    this.userInfoService.setPartnerId("");
    this.leftChat = true;
    this.router.navigate(['']);
  }

  ngAfterViewChecked(): void {
    this.msgbox.nativeElement.scrollTop = this.msgbox.nativeElement.scrollHeight - this.msgbox.nativeElement.clientHeight;
  }

  constructor(private socketService: SocketService,
<<<<<<< HEAD
              private router: Router,
              private route: ActivatedRoute,
              private userInfoService: UserInfoService) {
  }

  ngOnDestroy() {
    this._newMessageSub.unsubscribe();
    this._onLeftChatSub.unsubscribe();
    if(this.leftChat == false) {
      this.socketService.leaveChat(this.userID);
      this.userInfoService.setPartnerId("");
    }
  }
=======
              private userInfoService: UserInfoService, public dialog: MatDialog){}


  startVoiceCall(value: string) {
    let data = {
      userid: this.userID,
      type: 'voice'
    };
    this.socketService.sendCallRequest(data);

  }
  startVideoCall(value: string) {
    let data = {
      userid: this.userID,
      type: 'video'
    };

    this.socketService.sendCallRequest(data);

  }
  openDialog(value): void {

    const dialogRef = this.dialog.open(CallRecieveDialogComponent, {
      data: {
        calltype: value
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'decline')
        return;
      let data = {
        userid: this.userID,
        type: value
      }
      this.socketService.sendCallResponse(data);
      console.log('value',value);
      if (value === 'voice')
        this.openVoiceCallWindow('null');
      else
        this.openVideoCallWindow('null');
    });
  }

  openVoiceCallWindow(partnerid: string): void {
    console.log('on open voice call', 'on');
    const dialogRef = this.dialog.open(VoiceCallDialogComponent,{
      data: {
        userid: this.userID,
        partnerid: partnerid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
  });
  }

  openVideoCallWindow(partnerid: string): void {
    const dialogRef = this.dialog.open(VoiceCallDialogComponent,{
      data: {
        userid: this.userID,
        partnerid: partnerid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

>>>>>>> feature-call
}


