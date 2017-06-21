// process.env.NODE_ENV = 'test';

// const app = require('../../app');
// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp)

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTc5Njc3MTAsImV4cCI6MTQ5Nzk2OTE1MH0.ehSKY2nTyuyB1ihj3rxlN_YTixlnGaJlSB_R7g1CMVQ"

// describe('Documents', () => {
//   describe('/GET/documents', () => {
//     it('it should GET documents while paginate', (done) => {
//       chai.request(app)
//         .get('/api/documents/')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//   describe('/GET/search/documents/?q={}', () => {
//     it('it should GET a document by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/documents/?q=Fair day')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//   describe('/POST', () => {
//     it('should return a 201 response', (done) => {
//       chai.request(app)
//       .post('/api/documents/')
//       .set('x-access-token', token)
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .send({
//         title: "Tour to Quebeq",
//         content: "Day to remember",
//         access: "public",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         userId: 1
//       })
//       .end((err, res) => {
//         res.should.have.status(201);
//           done();
//         });
//       });
//     });

//     describe('/GET/<id>', () => {
//     it('it should GET a document by the given id', (done) => {
//       chai.request(app)
//         .get('/api/documents/2')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//     describe('/POST', () => {
//     it('should return a 201 response', (done) => {
//       chai.request(app)
//       .post('/api/documents/')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         title: "Sick leave",
//         content: "Submit a sick leave form after going to hospital",
//         access: "private",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         userId: 1,
//       })
//       .end((err, res) => {
//         res.should.have.status(201);
//           done();
//         });
//       });
//     });

//     describe('/POST', () => {
//     it('should return a 201 response', (done) => {
//       chai.request(app)
//       .post('/api/documents/')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         title: "December holiday",
//         content: "Going to vist children homes in Kampala",
//         access: "public",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         userId: 1,
//       })
//       .end((err, res) => {
//         console.log(err);
//         res.should.have.status(201);
//           done();
//         });
//       });
//     });

//     describe('/PUT', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .put('/api/documents/1')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         title: "Fair day",
//         content: "Dancing and shouting",
//         access: "private",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         UserId: 2,
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//           done();
//         });
//       });
//     });

//     describe('/PUT', () => {
//     it('should return a 404 response', (done) => {
//       chai.request(app)
//       .put('/api/documents/80')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         title: "Fair day",
//         content: "Dancing and shouting",
//         access: "private",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         UserId: 1,
//       })
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//     });
//   });

//   describe('/GET/<document>', () => {
//     it('it should GET a document by the given id', (done) => {
//       chai.request(app)
//         .get('/api/documents/2')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('title');
//           res.body.should.have.property('content');
//           res.body.should.have.property('access');
//           done();
//         });
//     });
//   });

//   describe('/GET/documents', () => {
//     it('it should GET all documents', (done) => {
//       chai.request(app)
//         .get('/api/documents/')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });

//   describe('/GET/documents', () => {
//     it('it should GET documents while paginate', (done) => {
//       chai.request(app)
//         .get('/api/documents/?limit=1&offset=1')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });
  
//   describe('/GET/documents', () => {
//     it('it should GET documents while paginate', (done) => {
//       chai.request(app)
//         .get('/api/documents/?limit=80&offset=60')
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//   describe('/DELETE', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .delete('/api/documents/2')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .end((err, res) => {
//         res.should.have.status(204);
//         done();
//       });
//     });
//    });

//   describe('/GET/<document>', () => {
//     it('it should GET a document by the given id', (done) => {
//       chai.request(app)
//         .get('/api/documents/2')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });


//   describe('/GET/search/documents/?q={}', () => {
//     it('it should GET a document by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/documents/?q=Fair day')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });

//   describe('/GET/search/documents/?q={}', () => {
//     it('it should GET a document by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/documents/?q=Sick leave')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });
// });

  