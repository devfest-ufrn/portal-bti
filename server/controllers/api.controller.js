'use strict'

exports.get = (req, res) => {
	res.send(`
		<h1>Portal BTI API</h1>
		<a href="/api/disciplinas">disciplinas</a>
		<a href="/api/curriculos">curriculos</a>
		<a href="/api/login">login</a>
	`)
}