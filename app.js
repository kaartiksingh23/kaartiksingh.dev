const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/weather-app',function(req,res){
  res.sendFile(path.join(__dirname+'/projects/javascript-weather-app/index.html'));
});

router.get('/music-app',function(req,res){
  res.sendFile(path.join(__dirname+'/projects/javascript-Music-App/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
