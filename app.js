//Configurações da aplicação    
var app = require("./config/application");

//Inicia a aplicação
var port = process.env.PORT || 3000;
app.listen(port,()=> console.log("Server started in port:" + port));



  
