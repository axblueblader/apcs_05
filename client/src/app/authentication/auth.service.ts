import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const SERVER_URL = environment.production? '':'http://localhost:3000';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    requestSignIn(data) {
        return this.http.post(SERVER_URL+"/user/signin",
        {
            userPhone: data.userPhone,
            userPass: data.userPass
        })        
    }

    requestSignUp(data) {
        return this.http.put(SERVER_URL+"/user/signup", {
            userName: data.userName,
            userPhone: data.userPhone,
            userPass: data.userPass,
            userGender: data.userGender
        })
    }
}