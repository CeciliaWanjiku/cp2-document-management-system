process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Roles', () => {
describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
      .post('/roles/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .end((err, res) => {
        res.should.have.status(201);
          done();
        });
      });
    });
    describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
      .post('/roles/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "regular",
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .end((err, res) => {
        res.should.have.status(201);
          done();
        });
      });
    });
  });