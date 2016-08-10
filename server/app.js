var request = require('request');
var host = 'localhost';
var port = 7474;
var urlForPosting = 'http://' + host + ':' + port + '/db/data/transaction/commit';

var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');


var node = db.createNode({hello: 'world'});
node.save((err,node) => {
  if (err) {
    console.log('Error saving new node to database: ', err);
  } else {
    console.log('Node saved to database with id: ', node.id);
  }
})
