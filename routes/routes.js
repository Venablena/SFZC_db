const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/', ctrl.get)
router.post('/', ctrl.create)
router.get('/:id', ctrl.show)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router
