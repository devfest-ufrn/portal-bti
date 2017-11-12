'use strict'

const express = require('express')
const router = express.Router()

// rotas da api
const disciplinas = require('./disciplinas.route')
const login = require('./login.route')
const curriculos = require('./curriculos.route')
const orientador = require('./orientador.route')

// @TODO
//const enfases = require('./enfases.route')
//const login = require('./login.route')

router.use('/disciplinas', disciplinas)
router.use('/curriculos', curriculos)
router.use('/orientador', orientador)
router.use('/login', login)

// 'interface' da api para teste
router.get('/',(req, res) => {
	res.send(`
		<h1>Portal BTI API</h1>
		<a href="/api/disciplinas">disciplinas</a>
		<a href="/api/curriculos">curriculos</a>
		<a href="/api/login">login</a>
	`)
})

module.exports = router