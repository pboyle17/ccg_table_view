var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  limit:String
});

module.exports = mongoose.model('Game',GameSchema);
