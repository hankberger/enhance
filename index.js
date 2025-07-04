const express = require('express');
const app = express();
const port = 3000;

app.use(express.text());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log('Received a POST request with the following content:');
  console.log(req.body);
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
