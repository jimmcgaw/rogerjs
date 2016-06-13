import express from 'express';

let app = express();

app.get('/', (request, response) => {
  response.send('hello express!');
});

app.listen(3000);
