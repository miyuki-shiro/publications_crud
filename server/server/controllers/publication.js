const Publication = require('../models').Publication;
const { Op } = require("sequelize");

module.exports = {
  create(req, res) {
    return Publication
      .create({ name: req.body.name, 
        description: req.body.description })
      .then(publication => res.status(201).send(publication))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    const condition = req.query.name ? { name: { [Op.iLike]: `%${req.query.name}%` } } : null;
    return Publication
      .findAll({  where: condition, order: [ ['id', 'DESC'] ] })
      .then(publications => res.status(200).send(publications))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Publication
      .findByPk(req.params.id)
      .then(publication => {
        if (!publication) { return res.status(404).send({ message: 'Publication Not Found' }); }
        return publication
          .destroy()
          .then(() => res.status(200).send(publication))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};