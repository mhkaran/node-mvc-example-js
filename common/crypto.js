var crypto = require('crypto')
var algorithm = 'aes-256-ctr'
var password = 'd6F3Efeq'

module.exports = {
    
    encrypt: async (text) =>{
        var cipher = await crypto.createCipher(algorithm,password)
        var crypted = await cipher.update(text,'utf8','hex')
        crypted += await cipher.final('hex');
        return crypted;
    },
    decrypt: async (text) => {
        var decipher = await crypto.createDecipher(algorithm,password)
        var dec = await decipher.update(text,'hex','utf8')
        dec += await decipher.final('utf8');
        return dec;    
    }
} 
