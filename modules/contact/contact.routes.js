const contactController = require('./controllers');
const jsonParserTrue = require('body-parser').json({ extended: true });
const isAuthenticated = require('../../utils/isAuthenticated');

module.exports = app => {
  app.post(
    '/api/contact/add/',
    jsonParserTrue,
    isAuthenticated,
    contactController.add
  );
  app.delete(
    '/api/contact/delete/:id/',
    jsonParserTrue,
    isAuthenticated,
    contactController.delete
  );
  app.get(
    '/api/contact/search/',
    jsonParserTrue,
    isAuthenticated,
    contactController.search
  );
  app.get(
    '/api/contact/all/',
    jsonParserTrue,
    isAuthenticated,
    contactController.all
  );
  app.put(
    '/api/contact/update/:id/',
    jsonParserTrue,
    isAuthenticated,
    contactController.update
  );
};
