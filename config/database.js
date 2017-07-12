/**
 * Created by Jefferson on 11/04/2017.
 */
//var db_string = 'mongodb://127.0.0.1/saveMyfood';
/*
var db_string =  'mongodb://savemyfood:p3nt1um4@ds143362.mlab.com:43362/savemyfood'
var mongoose = require("mongoose").connect(db_string);
var db = mongoose.connection;

//Modelos
var fraseModel = require('../app/model/fraseModel');

db.on('error', console.error.bind(console, 'Erro ao conectar'));

db.once('open',function () {
    exports.Frase = fraseModel();
    console.log("db started");
});
*/

const mongoose = require('mongoose');
var db_string =  'mongodb://savemyfood:p3nt1um4@ds143362.mlab.com:43362/savemyfood'
mongoose.Promise = global.Promise;
mongoose.connect(db_string); 