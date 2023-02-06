const publicationController = require('../controllers/publication');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({ message: 'Welcome to the Publication API!' }));

  app.post('/api/publication', publicationController.create);
  app.get('/api/publications', publicationController.list);
  app.delete('/api/publication/:id', publicationController.destroy);
};