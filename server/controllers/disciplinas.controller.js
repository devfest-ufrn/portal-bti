'use strict'

const path = require('path')

exports.get = (req, res, next) => {
	res.status(200).send(`
	<form method="post" action="/disciplinas/">
		<input type="text" name="codigo" placeholder="codigo da disciplina"/>
		<input type="submit"/>
	</form>`)
}

exports.post = (req, res, next) => {
	res.redirect(`/disciplinas/${req.body.codigo}`)
}

exports.getDisciplina = (req, res, next) => {
	var request = require('request-promise')
	var options = {
		method: 'POST',
		uri: 'https://apitestes.info.ufrn.br/authz-server/oauth/token?client_id=portal-bti-id&client_secret=segredo&grant_type=client_credentials',
		json: true
	}
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			var request = require('request-promise')
			var codigo = req.params.codigo
			var options = {
				method: 'GET',
				uri: `https://apitestes.info.ufrn.br/curso/v0.1/componentes-curriculares?codigo=${codigo}&limit=1`,
				json: true,
				headers: {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': '9fyaWctSN3aCVDZBjccpxIz79OXvjNJLgsbJVcib',
				}
			}
			// request para o componente-curricular
			request(options)
				.then((response) => {
					// Send json
					res.header('Access-Control-Allow-Origin', '*').status(200).send(response)
				})
				.catch((error)=>{
					// Error on getting disciplina
					res.header('Access-Control-Allow-Origin', '*').status(error.statusCode).send(error.message)
				})
		})
		.catch((err) => {
				// Authentication error
				res.status(err.statusCode).send(err.message)
		});
}