'use strict'

const express = require('express')
const path = require('path')
const app = express()
//const passport = require('passport')


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '../dist')))
//app.use(passport.initialize())

// routes
const indexRoute = require('./routes/index.route')
const apresentacaoRoute = require('./routes/apresentacao.route')
const enfasesRoute = require('./routes/enfases.route')


app.use('/', indexRoute)
app.use('/apresentacao',apresentacaoRoute)
app.use('/enfases',enfasesRoute)
//const api = require('./routes/api.route')
//app.use('/api', api)

app.set('port', process.env.PORT || '3000')
const port = app.get('port')
app.listen(process.env.PORT, process.env.IP, () => console.log(`Running on localhost:${port}`))
