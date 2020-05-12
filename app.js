const express = require('express');
const app = express();

app.use(express.static(__dirname));
// app.use(express.static(__dirname + 'projects/javascript-weather-app/'));
// app.use(express.static(__dirname + 'projects/javascript-Music-app/'));
app.listen(process.env.port || 8080);
