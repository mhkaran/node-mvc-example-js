const express = require('express');
const router = express.Router();
const designation =  require('../controller/controller_designation.js')

router.get('/list/', async (req, res) =>{

    let resMsg;
    let statusCode = 200;
    try{
        resMsg = JSON.stringify(await designation.list(req.body));
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation list is not fetched because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.post('/add', async (req, res) =>{ 
    
    var resMsg = 'Designation added successfully!';
    let statusCode = 201;
    try{
          await designation.add(req.body);
    }
    catch(e)
    {
        resMsg ='Designation is not added because of following reason : ' + e;
        statusCode = 500;
    }
    res.status(statusCode).end(resMsg);
});

router.put('/update', async (req, res) => {
      
    let resMsg = 'designation update successfully!';
    let statusCode = 200;
    try{
          await designation.update(req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation is not updated because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.delete('/remove', async (req, res) => {
      
    let resMsg = 'designation deleted successfully!';
    let statusCode = 410;
    try{
          await designation.delete(req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='designation is not deleted because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);

});

module.exports = router;