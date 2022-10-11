'use strict';

const logger = require('../src/middleware/logger');

describe('Logger middleware', ()=>{
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  test('Logs in the console', () =>{
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalledWith(req.method,req.path);
    expect(next).toHaveBeenCalledWith();
  });
});
