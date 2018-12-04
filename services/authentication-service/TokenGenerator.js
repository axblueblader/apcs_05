const uuidv1 = require('uuid/v1');

class TokenGenerator{
    constructor(){
    }
    getToken(){
        return uuidv1()
    }
}

module.exports = TokenGenerator