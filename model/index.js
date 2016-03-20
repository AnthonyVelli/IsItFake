var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/isitfake_test'); // <= db name will be 'wikistack'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Schema = mongoose.Schema;
var searchDBSchema = new Schema({
  original: {type: String, required: true},
  original_Hits: {type: Number, required: true},
  original_URL: {type: String, required: true},
  original_Links: [],
  fake: {type: String},
  fake_Hits: {type: Number},
  fake_URL: {type: String},
  fake_Links: []
})

var searchDB = mongoose.model('searchDB', searchDBSchema);

module.exports = {
    searchDB: searchDB
};