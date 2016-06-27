var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Animal = require('../models/animalCreate');

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

mongoose.connect('localhost:/27017/weekend_Assignment');

// base url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});

// spin up server
app.listen(8080, 'localhost', function(req, res){
  console.log( 'listening on 8080' );
});

// static folder
app.use( express.static('public') );

app.get( '/getAnimals', function( req, res ){
  Animal.find()
  .then( function( data ){
    res.send( data );
  });
});

app.post('/sendAnimal', function(req, res){
console.log('in sendAnimal');
//makes a new object to put in the database
var newAnimal = new Animal({
  name: req.body.name,
  animal: req.body.animal,
  age: req.body.age,
  url: req.body.url
});
newAnimal.save(function(err) { //saves object to database
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('Assignment saved');
      res.sendStatus(200);
    }
  });

console.log(newAnimal);
});
