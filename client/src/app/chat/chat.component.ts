import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit {
  @ViewChild('msgbox') msgbox: ElementRef;
  msg_list: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addMsg(value: string) {
    this.msg_list.push(value);
    this.msgbox.nativeElement.scrollTop = this.msgbox.nativeElement.scrollHeight;
    console.log(this.msgbox.nativeElement);
  }
}


