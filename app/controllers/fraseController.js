var db = require("../../config/database");
var Frase = require("../model/fraseModel");

var fraseController = {}

fraseController.lista= (callback)=>{
    Frase.find({}, (erro, frase)=>{
        if(!erro)
         callback(frase);
        else
        callback({erro:"Não foi possivel listar todas as frases."});
    })    
}

fraseController.dados = (id, callback)=> {
    Frase.findById(id,(erro, frase)=> {
        if(!erro)
         callback(frase);
        else
        callback({erro:"Não foi possivel encontrar a frase."});
    });
}

fraseController.cadastra = (param, callback)=>{
    Frase({
        frase: param.frase,
        autor: param.autor
    }).save((erro, frase)=>{
        if(!erro)
            callback({"success":"ok", "frase" : frase});
        else
            callback({"erro":"Não foi possível cadastrar a frase!"});
    });
   
    
}

fraseController.deleta = (id, callback)=>{
    Frase.findById(id, (erro, frase)=>{
        if(!erro && frase != undefined){
            frase.remove((erro)=>{
                if(!erro)
                    callback({status:"ok","msg":"frase removida com sucesso!"})
                else
                    callback({erro:"Não foi possivel remover a frase."})
            })
        }else{
            callback({erro:"A frase que você está testando remover não existe."})
        }
    })
}


module.exports = fraseController;