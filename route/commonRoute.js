const express = require('express');
const router = express.Router();
const appConst = require('../common/applicationConstant');

router.get('/*', async (req, res) =>{

    let statusCode = 200;
    try{
        if (appConst.httpMehtod.get.includes(req.actionMethod))
            resMsg = JSON.stringify(await req.controller[req.actionMethod](req.body));
        else 
            throw 'http method not is not valid with request url';
    }
    catch(e)
    {
        statusCode = 500
        resMsg = req.entity + ' list is not fetched because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.post('/*', async (req, res) =>{ 
    
    var resMsg = req.entity + ' added successfully!';
    let statusCode = 201;
    try{
        
        if (appConst.httpMehtod.post.includes(req.actionMethod))
          await req.controller[req.actionMethod](req.body);
        else
          throw 'http method not is not valid with request url';
    }
    catch(e)
    {
        resMsg = req.entity + ' is not added because of following reason : ' + e;
        statusCode = 500;
    }
    res.status(statusCode).end(resMsg);
});

router.put('/*', async (req, res) => {
      
    let resMsg = req.entity + ' update successfully!';
    let statusCode = 200;
    try{
        if (appConst.httpMehtod.put.includes(req.actionMethod))
          await req.controller[req.actionMethod](req.body);
        else
          throw 'http method not is not valid with request url';  
    }
    catch(e)
    {
        statusCode = 500
        resMsg = req.entity + ' is not updated because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.delete('/*', async (req, res) => {
      
    let resMsg = req.entity + ' deleted successfully!';
    let statusCode = 410;
    try{
        if (appConst.httpMehtod.delete.includes(req.actionMethod))
            await req.controller[req.actionMethod](req.body);
        else
            throw 'http method not is not valid with request url';  
    }
    catch(e)
    {
        statusCode = 500
        resMsg = req.entity + ' is not deleted because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);

});

module.exports = router;