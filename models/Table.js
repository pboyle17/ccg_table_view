var mongoose = require ('mongoose');

var TableSchema = new mongoose.Schema({
  number:String,
  limit:String
});

module.exports = mongoose.model('Table',TableSchema);
