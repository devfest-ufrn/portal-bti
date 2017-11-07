'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/api.controller')


// Get users
router.get('/users', controller.get)

module.exports = router