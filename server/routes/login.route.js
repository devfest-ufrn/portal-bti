'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/login.controller')

router.get('/', controller.redirect)
router.post('/auth', controller.auth)

module.exports = router
