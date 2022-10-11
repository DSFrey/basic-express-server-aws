'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('Handles bad routes', async ()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('Not Found');
  });

  test('Handles good routes', async () => {
    const response = await request.get('/person?name=test');
    expect(response.status).toEqual(200);
  });

  test('Gives correct output on good request', async () => {
    const response = await request.get('/person?name=test');
    expect(response.body).toEqual({name: 'test'});
  });

  test('Handles bad requests', async ()=>{
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('SERVER ERROR: No query');
  });

});
