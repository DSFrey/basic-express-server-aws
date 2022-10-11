'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


const app = express();

app.use(logger);

app.get('/', (req,res)=>{
  res.status(200).send('Hello world');
});

app.get('/person', validator, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send({ name });
});

app.use('*', notFound);

app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { app, start };
