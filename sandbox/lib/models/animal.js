"use strict";

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.Schema.Types.ObjectId;

var schema = new Schema({
  name: { type: String, required: true, uniqueness: true },
  age: { type: Number, min: 0, default: 0 },
  species: { type: String, required: true },
  diet: {
    kind: { type: String, enum: ['Carnivore', 'Omnivore', 'Novore'], default: 'Novore' }, // Carnivore, Omnivore, Novore
    consumes: [String] // Meat, Fish, Garbage
  }
});

module.exports = Mongoose.model('Animal', schema);