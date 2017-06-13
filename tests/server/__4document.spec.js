process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Documents', () => {
  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/documents/')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', (done) => {
      chai.request(app)
        .get('/search/documents/?q=Fair day')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
      .post('/documents/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "Tour to Quebeq",
        content: "Day to remember",
        access: "public",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      })
      .end((err, res) => {
        res.should.have.status(201);
          done();
        });
      });
    });

    describe('/GET/<id>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/documents/2')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

    describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
      .post('/documents/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "Sick leave",
        content: "Submit a sick leave form after going to hospital",
        access: "private",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
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
      .post('/documents/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "December holiday",
        content: "Going to vist children homes in Kampala",
        access: "public",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      })
      .end((err, res) => {
        console.log(err);
        res.should.have.status(201);
          done();
        });
      });
    });

    describe('/PUT', () => {
    it('should return a 200 response', (done) => {
      chai.request(app)
      .put('/documents/1')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "Fair day",
        content: "Dancing and shouting",
        access: "private",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
      })
      .end((err, res) => {
        res.should.have.status(200);
          done();
        });
      });
    });

    describe('/PUT', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
      .put('/documents/80')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "Fair day",
        content: "Dancing and shouting",
        access: "private",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });

  describe('/GET/<document>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/documents/2')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title');
          res.body.should.have.property('content');
          res.body.should.have.property('access');
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should GET all documents', (done) => {
      chai.request(app)
        .get('/documents/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/documents/?limit=1&offset=1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  
  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/documents/?limit=80&offset=60')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 200 response', (done) => {
      chai.request(app)
      .delete('/documents/2')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
    });
   });

  describe('/GET/<document>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/documents/2')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });


  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', (done) => {
      chai.request(app)
        .get('/search/documents/?q=Fair day')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', (done) => {
      chai.request(app)
        .get('/search/documents/?q=Sick leave')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});

  