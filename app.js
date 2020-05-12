var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from root folder
// app.use(app.router);


var server = app.listen(8080);