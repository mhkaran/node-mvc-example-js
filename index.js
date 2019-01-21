const express = require('express')
const app = express()
const appConst = require('./common/applicationConstant.js')
const bodyParser = require('body-parser')
const user = require('./route/route_user.js')  
const designation =  require('./route/route_designation.js')
const mongoose = require('mongoose');
const cors = require('cors');

//mongoose connection
mongoose.connect(appConst.mongodb.url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//set route
app.use('/user', user);
app.use('/designation', designation);

//set cors enable for whole site
app.use(cors());
app.options('*', cors());

app.listen(appConst.port, () => console.log('Example app listening on port ' + appConst.port + ' !'))