const express = require('express')
const app = express()
const appConst = require('./common/applicationConstant.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./route/commonRoute.js');
const entityObject = require('./middleware/route_entityCreation.js');

//mongoose connection
mongoose.connect(appConst.mongodb.url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(entityObject);

//set route
//app.use('/user', user);
//app.use('/designation', designation);
app.use('/' + appConst.app,route);

//set cors enable for whole site
app.use(cors());
app.options('*', cors());

app.listen(appConst.port, () => console.log('Example app listening on port ' + appConst.port + ' !'))