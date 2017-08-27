var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var config = require('./config');

var app = module.exports = express();

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());



//***Uncomment this code once you have your DB
//set up, and your massive URI set in config.js

// MASSIVE AND DB SETUP //
// var massiveServer = massive.connectSync({
// 	connectionString: config.MASSIVE_URI
// });
// app.set('db', massiveServer);
// var db = app.get('db');


var userCtrl = require('./controllers/userCtrl');

// Endpoints //



app.listen(config.port, function() {
	console.log('Listening on port ' + config.port);
});
