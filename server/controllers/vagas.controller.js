'use strict';

const credencials = require('../environment');
let request = require('request-promise');
let id = credencials['client-id'];
let secret = credencials['client-secret'];
let key = credencials['x-api-key'];
let url = credencials['api-url'];
let version = credencials['version'];
	
exports.apoio_tecnico = (req, res) => {
	
	let options = {
		'method': 'POST',
		'uri': `${url}/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			var request = require('request-promise');
			var options = {
				'method': 'GET',
				'uri': `${url}/bolsa-apoio-tecnico/${version}/oportunidades`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': key
				}
			};
			// request para o componente-curricular
			request(options)
				.then((response) => {
					res.send(response);
					//res.header('Access-Control-Allow-Origin', '*').status(200).end()
				})
				.catch((error)=>{
					// Error on getting disciplina
					res.header('Access-Control-Allow-Origin', '*').status(error.statusCode).send(error.message);
				});
		})
		.catch((err) => {
				// Authentication error
				res.status(err.statusCode).send(err.message);
		});
};

exports.monitoria = (req, res) => {
	let options = {
		'method': 'POST',
		'uri': `${url}/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			var request = require('request-promise');
			var options = {
				'method': 'GET',
				'uri': `${url}/monitoria/${version}/oportunidades-bolsas`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': key
				}
			};
			// request para o componente-curricular
			request(options)
				.then((response) => {
					res.send(response);
					//res.header('Access-Control-Allow-Origin', '*').status(200).end()
				})
				.catch((error)=>{
					// Error on getting disciplina
					res.header('Access-Control-Allow-Origin', '*').status(error.statusCode).send(error.message);
				});
		})
		.catch((err) => {
				// Authentication error
				res.status(err.statusCode).send(err.message);
		});
};

exports.pesquisa = (req, res) => {
	let options = {
		'method': 'POST',
		'uri': `${url}/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			var request = require('request-promise');
			var options = {
				'method': 'GET',
				'uri': `${url}/pesquisa/${version}/oportunidades-bolsas`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': key
				}
			}
			// request para o componente-curricular
			request(options)
				.then((response) => {
					res.send(response);
					//res.header('Access-Control-Allow-Origin', '*').status(200).end()
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
