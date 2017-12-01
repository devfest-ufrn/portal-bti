'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

// router
app.use('/api', require('./routes'));
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})



app.set('port', process.env.PORT || '3000')
const port = app.get('port')
app.listen(process.env.PORT, process.env.IP, () => console.log(`Running on localhost:${port}`))
