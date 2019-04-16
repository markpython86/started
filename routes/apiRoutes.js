var db = require("../models");
var express = require("express");

var router = express.Router();

  // Get all Collections
  router.get("/", function(req, res, next) {
    db.Collection.findAll({}).then(function(dbCollections) {
      res.json(dbCollections);
    });
  });

  // get one movie
  router.get("/:id", function(req, res, next) {
    db.Collection.findOne({ where: { id: req.params.id } }).then(function(dbCollection) {
      res.json(dbCollection);
    });
  });

  // Create a new Collection
  router.post("/", function(req, res, next) {
    db.Collection.create(req.body).then(function(dbCollection) {
      res.json(dbCollection);
    });
  });

  // Delete an Collection by id
  router.delete("/:id", function(req, res, next) {
    db.Collection.destroy({ where: { id: req.params.id } }).then(function(dbCollection) {
      res.json(dbCollection);
    });
  });

  // Update a Collection by id
    router.put("/:id", function(req, res, next) {
    db.Collection.update({ where: { id: req.params.id } }).then(function(dbCollection) {
      res.json(dbCollection);
    });
  });
  module.exports = router;