'use strict'

const express = require('express')
const router = express.Router()

// controllers
const api = require('../controllers/api.controller')
const disciplinas = require('../controllers/disciplinas.controller')
const login = require('../controllers/login.controller')


// Rotas para testar a api diretamente
router
	.get('/disciplinas', disciplinas.sendPage)
	.post('/disciplinas', disciplinas.redirect)
// Rest API
router
	.get('/', api.get)
	.get('/disciplinas/:codigo', disciplinas.get)
	
module.exports = router