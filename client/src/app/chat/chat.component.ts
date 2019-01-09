import {AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { SocketService } from '../socketio/socketio.service';
import { UserInfoService } from '../authentication/userInfo.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {VoiceCallDialogComponent} from '../voice-call-dialog/voice-call-dialog.component';
import {CallRecieveDialogComponent} from '../call-recieve-dialog/call-recieve-dialog.component';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('msgbox') msgbox: ElementRef;
  @ViewChild('newMsg') inputfield: ElementRef;
  msg_list: {
    msg: string,
    owner: string,
  }[] = [];

  private userID;

  ngOnInit() {
    // setInterval(
    //   () => {
    //     this.msg_list.push({msg: 'partner send', owner: 'partner'});
    //   }
    //   , 10000);

    this.userID = this.userInfoService.getToken();

    this.socketService.onNewMessage().subscribe((data) => {
      if (data === 'voicecall') {
        console.log('coming call', data);
        this.openDialog();
        return;
      }
      if (data === 'videocall') {
        console.log('coming call', data);
        return;
      }
      console.log('recieved message: ', data);
      this.msg_list.push({msg: data, owner: 'partner'});
    });
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

  ngAfterViewChecked(): void {
    this.msgbox.nativeElement.scrollTop = this.msgbox.nativeElement.scrollHeight - this.msgbox.nativeElement.clientHeight;
  }

  constructor(private socketService: SocketService,
              private userInfoService: UserInfoService, public dialog: MatDialog){}


  startVoiceCall(value: string) {
    let data = {
      userid: this.userID,
      msg: 'voicecall'
    }

    this.socketService.sendMessage(data);

  }
  startVideoCall(value: string) {
    let data = {
      userid: this.userID,
      msg: 'videocall'
    }
    this.socketService.sendMessage(data);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CallRecieveDialogComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}


