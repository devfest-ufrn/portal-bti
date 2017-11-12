'use strict'

const path = require('path')
const credencials = require('../config')

exports.sendPage = (req, res, next) => {
	res.send(`
		<form method="post" action="/api/curriculos/">
			<label>Código do curriculo: <input type="text" name="codigo"></label>
			<input type="submit" value="GET"/>
		</form>
		<a href="/api">voltar</a>
	`)
}

exports.redirect = (req, res, next) => {
	res.redirect(`/api/curriculos/${req.body.codigo}`)
}

exports.get = (req, res, next) => {
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
			
			// id do curso de tecnologia da informação da api
			var id_curso = 92127264
			var codigo = req.params.codigo
			
			var options = {
				'method': 'GET',
				'uri': `${credencials['api-url']}/curso/v0.1/matrizes-curriculares?id-curso=${id_curso}&ativo=true`,
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
					const disciplina = response;
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