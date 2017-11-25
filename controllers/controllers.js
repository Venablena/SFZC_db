const model = require('../models/models')

function get (req, res, next) {
  model.get().then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function create (req, res, next) {
  model.create(req.body).then(result => {
    res.status(201).json(result)
  }).catch(error => next(error))
}

function show (req, res, next) {
  model.find(req.params.id).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function destroy (req, res, next) {
  model.destroy(req.params.id).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function update (req, res, next) {
  model.patch(req.params.id, req.body).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

module.exports = {
  get, create, show, destroy, update
}
