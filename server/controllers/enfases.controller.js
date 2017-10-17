'use strict'

const path = require('path')

exports.get = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'))
}
exports.post = (req, res, next) => {
    res.status(404).send("Not Found 404")
}