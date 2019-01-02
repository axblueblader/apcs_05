export class UserInfoService {
    private userInfo;
    private token;
    private registeredSocket = false;

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
        this.token = userInfo.Token;
    }

    getToken() {
        return this.token;
    }

    getUserInfo() {
        return this.userInfo;
    }

    setRegisteredSocket(bool) {
        this.registeredSocket = bool;
    }

    getRegisteredSocket() {
        return this.registeredSocket;
    }
}