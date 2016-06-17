import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

let app = express();
app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
  schema
}));

app.get('/', (request, response) => {
  response.send('hello express!');
});

/* To populate database:
 connect to local mongodb and:
 > use rogerjs
 > db.createCollection('links')
 > db.links.insert({ title: "...", url: "..." });
 > db.links.insert({ title: "...", url: "..." });
*/


var db;

var url = 'mongodb://localhost:27017/rogerjs';
MongoClient.connect(url, (err, database) => {
  if (err) throw err;
  app.listen(3000, () => console.log("Listening on port 3000"));

  db = database;
});

// set up an API endpoint
app.get('/api/links', (request, response) => {

  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    response.json(links);
  });
})
