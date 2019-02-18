const jwt = require('jsonwebtoken');
const fs = require('fs');
const crypto = require('../common/crypto.js');

module.exports = {

    getToken: async (playLoad) =>{

        try{

        var verifyOptions = {expiresIn: '3600s',algorithm: "RS256" };

        const privateKey = fs.readFileSync('../user/common/private.Key','utf8');
 
        return await  jwt.sign(playLoad, privateKey, verifyOptions);

        }
        catch(e)
        {
            console.log(e)
            throw 'Invalid Data'
        }
    },
    verifyToken : async (token)=>{
    
        try{

            const publicKey = fs.readFileSync('../user/common/public.key','utf8');
    
            let userData =await  jwt.verify(token, publicKey, {algorithm: "RS256"});

            let data = await crypto.decrypt(userData.data)

            return data;
        }
        catch(e)
        {
            throw 'Invalid Token OR No token passed'
        }
    }
}
