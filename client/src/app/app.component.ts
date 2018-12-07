import { Component } from '@angular/core';
import { SocketService } from './socketio/socketio.service';
import { UserService } from './socketio/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SocketService,
    UserService
  ]
})
export class AppComponent {
  title = 'client';
}
