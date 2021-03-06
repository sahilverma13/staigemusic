//////// EXPRESS //////////

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 80;
var bodyParser = require('body-parser');

// use ejs and express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// user body parser
app.use(bodyParser.urlencoded({extended: false}));

// route our app
var router = require('./app/routes');
app.use('/',router);

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server

app.listen(port,function() {
	console.log('app started');
});

// app.get('/*', function(req, res){
// 	res.sendFile(path.join(__dirname, 'index.ejs'));
// });
