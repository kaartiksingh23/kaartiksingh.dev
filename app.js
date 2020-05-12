const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/music-app', function(req,res){
    res.sendFile(__dirname + '/projects/javascript-Music-App/'); 
});

app.get('/weather-app', function(req,res){
    res.sendFile(__dirname + '/projects/javascript-weather-app/'); 
});

app.listen(process.env.port || 8080);
