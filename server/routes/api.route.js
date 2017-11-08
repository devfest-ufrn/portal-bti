'use strict'

const express = require('express')
const router = express.Router()

// rotas da api
const disciplinas = require('./disciplinas.route')
const login = require('./login.route')

// EM BREVE... @TODO
//const tour = require('./tour.route')
//const enfases = require('./enfases.route')
//const orientador = require('./orientador.route')
//const login = require('./login.route')

router.use('/disciplinas', disciplinas)
router.use('/login', login)

// 'interface' da api para teste
router.get('/',(req, res) => {
	res.send(`
		<h1>Portal BTI API</h1>
		<a href="/api/disciplinas">disciplinas</a>
		<a href="/api/login">login</a>
	`)
})

module.exports = router