export class UserInfoService {
    private userInfo;
    private token;
    private registeredSocket = false;
    private partnerId = "";

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

    getPartnerId() {
        return this.partnerId;
    }

    setPartnerId(partnerId) {
        this.partnerId = partnerId;
    }

    reset() {
        this.token = undefined;
        this.partnerId = undefined;
        this.registeredSocket = undefined;
        this.userInfo = undefined;
    }
}