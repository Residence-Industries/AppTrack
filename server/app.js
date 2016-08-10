var express = require('express');
var cors = require ('cors');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');

var app = express();
var port = process.env.PORT || 3000;
app.listen(port);

//Logger for dev environment
if (process.env.NODE_ENV !== 'production') {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}

//Middleware
app.use(cors());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//parse application/json
app.use(bodyParser.json());
//serve up static files in production
//app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(express.static(__dirname + '/../client'));

//Neo4j setup
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');
