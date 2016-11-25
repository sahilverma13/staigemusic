// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

//route for homepage
router.get('/', function(req,res) {
  res.render(__dirname + 'pages/index');
});

//route for about
router.get('/about', function(req,res) {
  var users =[
    {name:"Sahil",email:"sahil@staige.net"},
    {name:"Karan",email:"karan@staige.net"},
    {name:"DEVOPSGUY",email:"dev@staige.in"}
  ];
	res.render ('pages/about', { users: users });
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});

router.post('/contact', function(req,res){
 res.send('Thanks for contacting us, ' + req.body.name +'! We will respond shortly!');  
});
