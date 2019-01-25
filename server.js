//to use express
var express = require('express');
var app = express();

//to use body parser
var bodyParser = require('body-parser');
//pass body as json
app.use(bodyParser.json());

// use angular 
app.use(express.static( __dirname + '/public/dist/public' ));

//use the routes file in server folder
require('./server/routes')(app); 

//server will listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
