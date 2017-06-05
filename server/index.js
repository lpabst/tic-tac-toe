// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = module.exports = express();

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());


// MASSIVE AND DB SETUP //
var massiveServer = massive.connectSync({
	connectionString: config.MASSIVE_URI
});
app.set('db', massiveServer);
var db = app.get('db');


// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl');

// ENDPOINTS //




// CONNECTIONS //
var port = config.PORT;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
