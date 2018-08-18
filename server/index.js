// run "heroku create <app-name>" from here and not in client
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const orders = require('./routes/orders');

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use('/orders', orders);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`server listening on ${port}`);
