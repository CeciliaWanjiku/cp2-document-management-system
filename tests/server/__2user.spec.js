// process.env.NODE_ENV = 'test';

// const app = require('../../app');
// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp)

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTc5Njc3MTAsImV4cCI6MTQ5Nzk2OTE1MH0.ehSKY2nTyuyB1ihj3rxlN_YTixlnGaJlSB_R7g1CMVQ"


// describe('Users', () => {
//   describe('/GET/users', () => {
//     it('it should GET users while paginate', (done) => {
//       chai.request(app)
//         .get('/api/users/')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//   describe('/GET/search/users/?q={}', () => {
//     it('it should GET a user by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/users/?q=Hellen')
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
//       .post('/api/users/')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         username: "Flevv",
//         firstName: "flavour",
//         lastName: "Kanaiza",
//         email: "flavour@gmail.com",
//         password: "flevv",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         roleId: 1
//       })
//       .expect(201, done())
//       // .end((err, res) => {
//       //   res.should.have.status(201);

//       //     done();
//       //   });
//       });
//     });

//     describe('/GET/:id user', () => {
//     it('it should GET a user by the given id', (done) => {
//       chai.request(app)
//         .get('/api/users/2')
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
//       .post('/api/users/')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         username: "MIlka",
//         firstName: "angiro",
//         lastName: "Kezyy",
//         email: "kezyy@gmail.com",
//         password: "kezzy",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         roleId: 2
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
//       .post('/api/users/')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         username: "kevoo",
//         firstName: "Kerich",
//         lastName: "keryy",
//         email: "keryy@gmail.com",
//         password: "kezzy",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         roleId: 2
//       })
//       .end((err, res) => {
//         res.should.have.status(201);
//           done();
//         });
//       });
//     });

//     describe('/PUt', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .put('/api/users/1')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         username: "Hellen",
//         firstName: "Phoebe",
//         lastName: "hellen",
//         email: "hellen@gmail.com",
//         password: "hellen",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         roleId: 1
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//           done();
//         });
//       });
//     });

//     describe('/PUt', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .put('/api/users/80')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .send({
//         username: "Hellen",
//         firstName: "Phoebe",
//         lastName: "hellen",
//         email: "hellen@gmail.com",
//         password: "hellen",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         roleId: 1
//       })
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//     });
//   });

//   describe('/GET/:id user', () => {
//     it('it should GET a user by the given id', (done) => {
//       chai.request(app)
//         .get('/api/users/2')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('username');
//           res.body.should.have.property('firstName');
//           res.body.should.have.property('lastName');
//           res.body.should.have.property('email');
//           res.body.should.have.property('password');
//           res.body.should.have.property('roleId');
//           done();
//         });
//     });
//   });

//   describe('/GET/users', () => {
//     it('it should GET all users', (done) => {
//       chai.request(app)
//         .get('/api/users/')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });

//   describe('/GET/users', () => {
//     it('it should GET users while paginate', (done) => {
//       chai.request(app)
//         .get('/api/users/?limit=1&offset=1')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });
  
//   describe('/GET/users', () => {
//     it('it should GET users while paginate', (done) => {
//       chai.request(app)
//         .get('/api/users/?limit=80&offset=60')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

//   describe('/DELETE', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .delete('/api/users/80')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//     });
//   });
//   describe('/DELETE', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .delete('/api/users/2')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .end((err, res) => {
//         res.should.have.status(204);
//         done();
//       });
//     });
//   });

//   describe('/DELETE', () => {
//     it('should return a 200 response', (done) => {
//       chai.request(app)
//       .delete('/api/users/2')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .set('x-access-token', token)
//       .end((err, res) => {
//         res.should.have.status(404);
//         done();
//       });
//     });
//   });

//   describe('/GET/search/users/?q={}', () => {
//     it('it should GET a user by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/users/?q=Hellen')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         });
//     });
//   });

//   describe('/GET/search/users/?q={}', () => {
//     it('it should GET a user by searching', (done) => {
//       chai.request(app)
//         .get('/api/search/users/?q=Flevv')
//         .set('x-access-token', token)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });
// });

  