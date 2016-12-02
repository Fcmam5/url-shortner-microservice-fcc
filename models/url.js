var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
   original: {type: String, required: true},
   urlID: Number,
   short_url: String
});

module.exports = mongoose.model('UrlData', urlSchema);
