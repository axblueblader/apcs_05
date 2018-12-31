import {AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, OnDestroy} from '@angular/core';
import { SocketService } from '../socketio/socketio.service';
import { UserInfoService } from '../authentication/userInfo.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
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
      console.log('recieved message: ', data);
      this.msg_list.push({msg: data, owner: 'partner'});
    });

    this.socketService.onLeftChat().subscribe((data) => {
      alert("Partner left the chat");
      this.router.navigate(['../home'],{relativeTo: this.route});
    })
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
    this.router.navigate(['../home'],{relativeTo: this.route});
  }

  ngAfterViewChecked(): void {
    this.msgbox.nativeElement.scrollTop = this.msgbox.nativeElement.scrollHeight - this.msgbox.nativeElement.clientHeight;
  }

  constructor(private socketService: SocketService,
              private router: Router,
              private route: ActivatedRoute,
              private userInfoService: UserInfoService) {
  }

  ngOnDestroy() {
    this.socketService.leaveChat(this.userID);
  }
}


