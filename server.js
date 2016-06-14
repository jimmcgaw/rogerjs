import express from 'express';

let app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('hello express!');
});

app.listen(3000);
