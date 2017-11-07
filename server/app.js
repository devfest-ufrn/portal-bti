'use strict'

const express = require('express')
const path = require('path')
const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '../dist')))

// routes
const indexRoute = require('./routes/index.route')
const tourRoute = require('./routes/tour.route')
const enfasesRoute = require('./routes/enfases.route')
const disciplinasRoute = require('./routes/disciplinas.route')
const orientadorRoute = require('./routes/orientador.route')
const loginRoute = require('./routes/login.route')
const api = require('./routes/api.route')

app.use('/', indexRoute)
app.use('/tour',tourRoute)
app.use('/enfases',enfasesRoute)
app.use('/disciplinas',disciplinasRoute)
app.use('/orientador',orientadorRoute)
app.use('/login',loginRoute)
app.use('/api', api)

app.set('port', process.env.PORT || '3000')
const port = app.get('port')
app.listen(process.env.PORT, process.env.IP, () => console.log(`Running on localhost:${port}`))
