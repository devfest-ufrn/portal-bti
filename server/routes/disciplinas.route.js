'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/disciplinas.controller')

// Rotas para testar a api
router.get('/', controller.get)
router.post('/', controller.post)

// Rest API
router.get('/:codigo', controller.getDisciplina)

module.exports = router