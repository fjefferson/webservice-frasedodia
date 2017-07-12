var mongoose = require('mongoose');
var Schema = mongoose.Schema;


    const FraseSchema  = new Schema({
        frase: {type: String, require: true},
        autor:{type: String,default: "Frase do Dia"},
        create_as: {type: Date,default: Date.now}
    });

module.exports = mongoose.model('Frase', FraseSchema);

