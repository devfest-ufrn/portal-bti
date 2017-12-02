'use strict'

let router = require('express').Router();

// controllers
let disciplinas = require('./controllers/disciplinas.controller');
let curriculos = require('./controllers/curriculos.controller');
let user = require('./controllers/user.controller');
let vagas = require('./controllers/vagas.controller');
let orientador = require('./controllers/orientador.controller');

router
	.get('/disciplinas/:codigo', disciplinas.get)
	.get('/curriculos', curriculos.get)
	.get('/vagas/apoio-tecnico', vagas.apoio_tecnico)
	.get('/vagas/monitoria', vagas.monitoria)
	.get('/vagas/pesquisa', vagas.pesquisa)
	.post('/user/auth', user.authenticate)
	.post('/user/info', user.user_info)
	.post('/user/id_discente', user.id_discente)
	.post('/user/semestres_cursados', user.semestres_cursados)
	.post('/user/turmas_semestre_atual', user.turmas_semestre_atual)
	.post('/user/turmas', user.turmas)
	.post('/orientador/meus_semestres', orientador.meus_semestres)
	
module.exports = router;