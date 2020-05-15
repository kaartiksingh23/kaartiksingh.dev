const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/music-app", function (req, res) {
  res.sendFile(__dirname + "/projects/javascript-Music-App/");
});

app.get("/weather-app", function (req, res) {
  res.sendFile(__dirname + "/projects/javascript-weather-app/");
});

app.get("/landing-page", function (req, res) {
  res.sendFile(__dirname + "/projects/responsive-laptop-marketing-page/");
});

app.get("/spooky-ghost", function (req, res) {
  res.sendFile(__dirname + "/projects/spooky-ghost/");
});

app.listen(process.env.port || 8080);
