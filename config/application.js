var express = require("express");
var app = module.exports = express();
var bodyParse = require("body-parser");
var auth = require('http-auth');


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}));

var fraseRouter = require("../app/routers/fraseRouters");

app.use(express.static('./public'));

var basic = auth.basic({
		realm: "Frases do Dia",
        file: __dirname + "/data/users.htpasswd"
    }
);


//app.use('/frase', auth.connect(basic), fraseRouter);
app.use('/frase',fraseRouter);

//Configurações de permissões de acesso methods
var allowCors = function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}
app.use(allowCors);



