'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')

// acesso à api
router.use('/api', require('./routes/api.route'))

// acesso ao front, angular decide as rotas
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = router