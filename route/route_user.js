const express = require('express');
const router = express.Router();
const user = require('../controller/controller_user.js');

router.get('/list/', async (req, res) =>{

    let resMsg;
    let statusCode = 200;
    try{
        resMsg = JSON.stringify(await user.list(req.body));
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='user list is not fetched because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.post('/add', async (req, res) =>{ 

    let resMsg = 'user added successfully!';
    let statusCode = 201;
    try{
          await user.add(req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='user is not added because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.put('/update', async (req, res) => {
     
    let resMsg = 'user update successfully!';
    let statusCode = 200;
    try{
          await user.update(req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='user is not updated because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);

});

router.delete('/remove', async (req, res) => {

    let resMsg = 'user deleted successfully!';
    let statusCode = 410;
    try{
          await user.delete(req.body);
    }
    catch(e)
    {
        statusCode = 500
        resMsg ='user is not deleted because of following reason : ' + e;
    }
    res.status(statusCode).end(resMsg);

});

module.exports = router;