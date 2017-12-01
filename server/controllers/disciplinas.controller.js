'use strict'

const credencials = require('../environment');

exports.get = (req, res) => {
	var request = require('request-promise')
	var options = {
		'method': 'POST',
		'uri': `${credencials['api-url']}/authz-server/oauth/token?client_id=${credencials['client-id']}&client_secret=${credencials['client-secret']}&grant_type=client_credentials`,
		'json': true
	}
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			var request = require('request-promise')
			var codigo = req.params.codigo
			var options = {
				'method': 'GET',
				'uri': `${credencials['api-url']}/curso/v0.1/componentes-curriculares?codigo=${codigo}&limit=1`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': credencials['x-api-key']
				}
			}
			// request para o componente-curricular
			request(options)
				.then((response) => {
					// formata a resposta da api
					const disciplina = response[0];
					res.header('Access-Control-Allow-Origin', '*').status(200).send(disciplina)
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
