const rolesController = require('../controllers').roles;
const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;
const authenticatesController = require('../controllers').authenticates;

const restbac = require('rest-bac');
const roleConfig = require('../config/roles.json');

module.exports = (app) => {
  app.post('/api/users/login', authenticatesController.login);
  app.post('/api/users/', usersController.create);

  app.user(authenticatesController.verifyLogin);

  app.put('/api/users/:userId', usersController.update);

  app.post('/api/documents/', documentsController.create);
  app.get('/api/documents/', documentsController.listDocs);
  app.get('/api/documents/:documentId', documentsController.retrieve);
  app.put('/api/documents/:documentId', documentsController.update);
  app.get('/api/users/:userId/documents', documentsController.userDocs);
  app.delete('/api/documents/:documentId', documentsController.destroy);
  app.get('/api/search/documents/', documentsController.searchDoc);

  app.use(authenticatesController.roleAuthorise);
  
  restbac(app, roleConfig, "/api");

  app.post('/api/roles',rolesController.create);
  app.get('/api/roles', rolesController.list);
  app.delete('/api/roles/:role', rolesController.destroy);
  
  app.get('/api/users/', usersController.listUsers);
  app.get('/api/users/:userId', usersController.retrieve);
  app.delete('/api/users/:userId', usersController.destroy);
  app.get('/api/search/users/', usersController.searchUser);

  app.use(authenticatesController.roleUnauthorise);

};