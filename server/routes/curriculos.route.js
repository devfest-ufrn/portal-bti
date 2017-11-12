'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/curriculos.controller')

// teste
router.get('/', controller.sendPage)
router.post('/', controller.redirect)

// api
router.get('/:codigo', controller.get)

module.exports = router