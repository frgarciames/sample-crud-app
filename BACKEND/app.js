const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const clients_routes = require('./routes/client')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', clients_routes)

app.listen(port)