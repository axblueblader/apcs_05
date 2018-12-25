import { Component } from '@angular/core';
import { SocketService } from './socketio/socketio.service';
import { AuthService } from './authentication/auth.service';
import { UserInfoService } from './authentication/userInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SocketService,
    AuthService,
    UserInfoService
  ]
})
export class AppComponent {
  title = 'Tale Chat';
}
