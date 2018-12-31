import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { environment } from '../../environments/environment';

const SERVER_URL = environment.production? '':'http://localhost:3000';

//@Injectable()
export class SocketService {
    private socket = undefined;

    // Initalize the socket
    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
        console.log('Socket client initialized');
        console.log('Socket object:',this.socket);
        console.log('Server url: ',SERVER_URL);
    }

    public isUndefined() {
        if (this.socket == undefined) {
            return true;
        }else {
            return false;
        }
    }
    /*  REGISTER SOCKET SECTION
    *   register to link userID with socket on server
    */
    public register(userID): void {
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
    public startSearch(data): void {
        this.socket.emit('start search',data);
        console.log('Socket emit: START SEARCH with ',data);
    }

    public stopSearch(data): void {
        this.socket.emit('stop search',data);
        console.log('Socket emit: STOP SEARCH with',data);
    }
    
    public onFoundMatch(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('found match',(data) => observer.next(data));
        })
    }

    public onWaitingInQueue(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('waiting in queue',(data) => observer.next(data));
        })
    }
    /*  END MATCHING SECTION    */

    /*  MESSAGING SECTION 
    *   send, recieve message
    *   emit seen event and recieve seen event
    */
    public sendMessage(data): void {
        this.socket.emit('send message', data);
    }

    public onNewMessage(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('new message', (data) => observer.next(data));
        });
    }

    public messageRecieved(userID): void {
        this.socket.emit('message recieved',userID);
    }

    public onMessageSeen(): Observable<any> {
        return new Observable<any>(observer => {
            // TODO: time as data
            this.socket.on('message seen',(data) => observer.next(data));
        })
    }
    /*  END MESSAGING SECTION   */

    /*  MESSAGING SECTION 
    *   leave chat
    *   exit event
    */
    public leaveChat(data): void {
        this.socket.emit('leave chat',data);
        console.log('Leaving chat');
    }

    public onLeftChat(): Observable<any> {
        return new Observable<any>(observer => {
            // TODO: time as data
            this.socket.on('message seen',(data) => observer.next(data));
        })
    }
    /*  END LEAVING SECTION     */
}
