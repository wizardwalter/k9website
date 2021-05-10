var mongoose = require("mongoose");

var dogsSchema = new mongoose.Schema({
	image: String,
    name: String,
	about: String,
    Date: Date
});
module.exports = mongoose.model('dogs', dogsSchema);