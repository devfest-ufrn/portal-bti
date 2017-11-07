'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/disciplinas.controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.get('/:codigo', controller.getDisciplina)

module.exports = router