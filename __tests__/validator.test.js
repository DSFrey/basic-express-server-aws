'use strict';

const validator = require('../src/middleware/validator');

describe('Request validator', () => {
  const res = {};
  const next = jest.fn();

  test('Handles Good requests', () => {
    const req = { query: { name: 'test' } };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  test('Handles bad requests', () => {
    const req = { query: {} };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith({ message: 'No query' });
  });
});
