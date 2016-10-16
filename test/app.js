const request = require('supertest');
const app = require('../app.js');

describe('GET /projects', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/projects')
      .expect(200, done);
  });
});

describe('GET /signup', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/project/solar_car')
      .expect(200, done);
  });
});

describe('GET /signup', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/project/junk-name')
      .expect(404, done);
  });
});

describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
