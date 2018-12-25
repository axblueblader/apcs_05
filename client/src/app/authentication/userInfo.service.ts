export class UserInfoService {
    private userInfo;
    private token;

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
        this.token = userInfo.Token;
    }

    getToken() {
        return this.token;
    }
}