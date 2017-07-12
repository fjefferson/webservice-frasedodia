
const mongoose = require('mongoose');
var db_string =  'mongodb://127.0.0.1/dbMongo'
mongoose.Promise = global.Promise;
mongoose.connect(db_string); 
