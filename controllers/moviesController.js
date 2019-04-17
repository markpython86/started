const db = require("../models");

// Defining methods for the moviesController
module.exports = {
  findAll: function(req, res) {
    db.Collection
    .findAll({})
    .then((dbCollections) => res.json(dbCollections))
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Collection
      .findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Collection
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Collection
      .update({
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      image: req.body.image
    }, {
      where: {
        id: req.body.id
      }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Collection
      .destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
