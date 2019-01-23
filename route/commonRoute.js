const express = require('express');
const router = express.Router();

router.get('/*', async (req, res) =>{

    let statusCode = 200;
    try{
        resMsg = JSON.stringify(await req.controller[req.actionMethod](req.body));
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation list is not fetched because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.post('/*', async (req, res) =>{ 
    
    var resMsg = 'Designation added successfully!';
    let statusCode = 201;
    try{
          await req.controller[req.actionMethod](req.body);
    }
    catch(e)
    {
        resMsg ='Designation is not added because of following reason : ' + e;
        statusCode = 500;
    }
    res.status(statusCode).end(resMsg);
});

router.put('/*', async (req, res) => {
      
    let resMsg = 'designation update successfully!';
    let statusCode = 200;
    try{
          await req.controller[req.actionMethod](req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation is not updated because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.delete('/*', async (req, res) => {
      
    let resMsg = 'designation deleted successfully!';
    let statusCode = 410;
    try{
          await req.controller[req.actionMethod](req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation is not deleted because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);

});

module.exports = router;