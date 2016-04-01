var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Heroes = new Schema({
  alias: {type: String, required: true},
  first_name: {type : String, required: true},
  last_name: {type: String, required: true},
  city: {type: String, required: true},
  power_name: {type: String, required: true},
});

module.exports = mongoose.model('Heroes', Heroes);
