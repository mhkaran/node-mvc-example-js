const designation =  require('../controller/controller_designation.js')
const user =  require('../controller/controller_user.js')
const appConst = require('../common/applicationConstant.js')

module.exports = (req,res,next)=>{
         
    try {
        const controller = req.originalUrl.split('/')[2]
        const func =  req.originalUrl.split('/')[3]
        
        if (controller == appConst.entity.user)
            req.controller = user
        else if (controller == appConst.entity.designation)
            req.controller = designation
            
        if (typeof req.controller[func] == "function")    
         {   
             req.actionMethod=func        
             next();    
         }
        else 
        res.status(404).end('Bad url!');
    }
    catch(e) {
        res.status(404).end('Bad url!');
    }    
        
    }