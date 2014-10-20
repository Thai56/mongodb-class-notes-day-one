"use strict";

var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/zoo');

var Animal = require('./lib/models/animal');
var Exhibit = require('./lib/models/exhibit');

var penguinExhibit = new Exhibit({
  name: "Arctic Ballroom"
});

Animal.find({ species: 'Penguin' }, function (err, animals) {
  if (err) throw err;

  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    penguinExhibit.animals.push(animal._id);
  }


  penguinExhibit.save(function (err) {
    if (err) throw err;
    console.log('Exibit saved');
  });

});


//var kangaroo = new Animal({
//  name: "Roo"
//});
//
//kangaroo.save(function (err) {
//  if (err) throw err;
//  console.log(kangaroo);
//});

//var penguin = new Animal({
//  name: 'Happy Feet',
//  diet: {
//    consumes: ['Fish']
//  }
//});
//
//penguin.save(function (err) {
//  if (err) throw err;
//  console.log(penguin);
//});

//Animal.findOne({ name: 'Happy Feety' }, function (err, animals) {
//  console.log(animals);
//});


// String, Boolean, Number, ObjectId, Date


// Felix, felix

//var schema = new Mongoose.Schema({
//  name: { type: String, required: true, uniqueness: true, minLength: 1, maxLength: 128 }
//});
//
//
//var Animal = Mongoose.model("Animal", schema);
//
//var cat = new Animal();
//
//cat.save(function (err, cat) {
//  if (err) throw err;
//  console.log("Cat saved successfully");
//});

console.log('Mongoose connected successfully');