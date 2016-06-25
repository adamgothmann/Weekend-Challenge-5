var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
name: String,
animal: String,
age: Number,
url: String
});

var Animal = mongoose.model('animal', animalSchema);

module.exports = Animal;
