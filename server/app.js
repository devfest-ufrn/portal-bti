'use strict'

const express = require('express')
const path = require('path')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '../dist')))

// router
app.use('/', require('./router'))

app.set('port', process.env.PORT || '3000')
const port = app.get('port')
app.listen(process.env.PORT, process.env.IP, () => console.log(`Running on localhost:${port}`))
