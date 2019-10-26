'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('NodeJS Service Greeting\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);