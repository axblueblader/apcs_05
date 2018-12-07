import { Observable, Observer } from 'rxjs';

export class UserService {
    userID;
    userState;  // Use for checks before other actions

    getUserID() {
        return this.userID;
    }

    signIn(data) {
        // http request server with data
        // set userID with response
    }

    signOut() {

    }
}