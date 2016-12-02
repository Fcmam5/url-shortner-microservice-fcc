var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
   original: {type: String, required: true}
});

module.exports = mongoose.model('UrlData', urlSchema);
