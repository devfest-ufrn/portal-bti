'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/disciplinas.controller')

// Rotas para testar a api
router.get('/', controller.sendPage)
router.post('/', controller.redirect)

// Rest API
router.get('/:codigo', controller.get)

module.exports = router