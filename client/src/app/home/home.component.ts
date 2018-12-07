import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socketio/socketio.service'
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

  startSearch() {
    var data = {
      userid: this.userID, // userid from db
      queueType: 'quick'  // queueType from options chose in screen
    }
    this.socketService.startSearch(data)
  }

  stopSearch() {
    this.socketService.stopSearch(this.userID);
  }

  initSocketEventHandler() {
    this.socketService.onWaitingInQueue().subscribe((data)=>{
      // Show waiting animation and message
    })

    this.socketService.onFoundMatch().subscribe((data)=>{
      // Show found match and navigate to quiz page
    })
  }

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.initSocket();
    this.initSocketEventHandler();
    
  }

}
