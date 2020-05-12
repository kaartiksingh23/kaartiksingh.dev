const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/weather-app',function(req,res){
  res.sendFile(path.join(__dirname+'/projects/javascript-weather-app/index.html')); 
  app.use(express.static(path.join(__dirname+'/projects/javascript-weather-App/')))
});

router.get('/music-app',function(req,res){
  res.sendFile(path.join(__dirname+'/projects/javascript-Music-App/'));
  app.use(express.static(path.join(__dirname+'/projects/javascript-Music-App/')))
});

//add the router

app.use(express.static(__dirname));
app.use('/', router);

app.listen(process.env.port || 8080);
