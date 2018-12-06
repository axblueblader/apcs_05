import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';

//const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
    private socket;

    // Initalize the socket
    public initSocket(): void {
        // this.socket = socketIo(SERVER_URL);
        this.socket = socketIo();
    }

    /*  REGISTER SOCKET SECTION
    *   register to link userID with socket on server
    */
    public register(userID: String): void {
        this.socket.emit('register',userID);
    }
    /*  END REGISTER SOCKET SECTION */

    /*  MATCHING SECTION
    *   start search, stop search
    */

    // data: {
    //     userID: userID,
    //     queueType: quick | malemale | malefemale | femalemale | femalefemale
    // }
    public startSearch(data: JSON): void {
        this.socket.emit('start search',data);
    }

    public stopSearch(userID: String): void {
        this.socket.emit('stop search',userID);
    }
    
    public onFoundMatch(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('found match',(data: String) => observer.next(data));
        })
    }

    public onWaitingInQueue(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('waiting in queue',(data: String) => observer.next(data));
        })
    }
    /*  END MATCHING SECTION    */

    /*  MESSAGING SECTION 
    *   send, recieve message
    *   emit seen event and recieve seen event
    */
    public sendMessage(message: String): void {
        this.socket.emit('send message', message);
    }

    public onNewMessage(): Observable<String> {
        return new Observable<String>(observer => {
            this.socket.on('new message', (data: String) => observer.next(data));
        });
    }

    public messageRecieved(userID: String): void {
        this.socket.emit('message recieved',userID);
    }

    public onMessageSeen(): Observable<String> {
        return new Observable<String>(observer => {
            // TODO: time as data
            this.socket.on('message seen',(data: String) => observer.next(data));
        })
    }
    /*  END MESSAGING SECTION   */
}
