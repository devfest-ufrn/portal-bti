'use strict'

let router = require('express').Router();

// controllers
let disciplinas = require('./controllers/disciplinas.controller')
let curriculos = require('./controllers/curriculos.controller')
let user = require('./controllers/user.controller')

router
	.get('/disciplinas/:codigo', disciplinas.get)
	.get('/curriculos', curriculos.get)
	.post('/user/auth', user.authenticate)
	.post('/user/info', user.user_info)
	.post('/user/id_discente', user.id_discente)
	.post('/user/semestres_cursados', user.semestres_cursados)
	.post('/user/turmas_discente', user.tumas_discente)
	
module.exports = router;