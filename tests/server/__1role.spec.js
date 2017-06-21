process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTc5Njc3MTAsImV4cCI6MTQ5Nzk2OTE1MH0.ehSKY2nTyuyB1ihj3rxlN_YTixlnGaJlSB_R7g1CMVQ'

describe('Roles', () => {
describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
      .post('/api/roles')
      .set('x-access-token', token)
      .send({
        title: "fello"
      })
      .end((err, res) => {
        res.should.have.status(201);
          done();
        });
      });
    })
    // describe('/POST', () => {
    // it('should return a 201 response', (done) => {
    //   chai.request(app)
    //   .post('/api/roles/')
    //   .set('Content-Type', 'application/x-www-form-urlencoded')
    //   .set('x-access-token', token)
    //   .send({
    //     title: "fellow",
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   })
    //   .end((err, res) => {
    //     res.should.have.status(201);
    //       done();
    //     });
    //   });
    // });
  });