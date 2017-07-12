var express = require("express");
var fraseController = require('../controllers/fraseController');
var fraseRouters = express.Router();

fraseRouters.get('/', (req, res)=>{
    fraseController.lista((response)=>{
        res.json(response);
    });
});


fraseRouters.get('/:id', (req, res)=>{
    fraseController.dados(req.params.id ,(response)=>{
        res.json(response);
    });
});

fraseRouters.post('/', (req,res)=>{
   fraseController.cadastra(req.body, response => res.json(response));
})

fraseRouters.delete('/:id',(req, res)=>{
    fraseController.deleta(req.params.id, response => res.json(response));
})


module.exports = fraseRouters;