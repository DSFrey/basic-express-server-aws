'use strict';

const validator = (req, res, next) => {
  if(typeof req.query.name === 'undefined') {
    next({message: 'No query'});
  } else next();
};

module.exports = validator;
