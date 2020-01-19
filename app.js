// serverjs

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var http        = require('http');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
// [ CONFIGURE mongoose ]


// CONNECT TO MONGODB SERVER

var db = mongoose.connection;

// DEFINE MODEL
mongoose.connect('127.0.0.1:27017/local');

db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("let's get it");
});


// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 80;

// [CONFIGURE ROUTER]
app.use('/mycapsules', require('./routes/mycapsules'));
app.use('/capsuledatas', require('./routes/capsuledatas'));
app.use('/capsulelocdatas', require('./routes/capsulelocdatas'));
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});


