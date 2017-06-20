const express = require('express');
const mustacheExpress = require('mustache-express');
const robots = require('./users.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));

app.get('/robot/', function (req, res) {
  res.render("robot", robots);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
