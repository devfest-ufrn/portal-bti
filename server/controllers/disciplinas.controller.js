'use strict'

let request = require('request-promise');
let credencials = require('../environment');
let secret = credencials['client-secret'];
let id = credencials['client-id'];
let base_url = credencials['api-url'];
let version = credencials['version'];
let localhost = credencials['localhost'];
let key = credencials['x-api-key'];

exports.get = (req, res) => {
	let options = {
		'method': 'POST',
		'uri': `${base_url}/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	request(options)
		.then((auth) => {
			let codigo = req.params.codigo;
			let options = {
				'method': 'GET',
				'uri': `${credencials['api-url']}/curso/v0.1/componentes-curriculares?codigo=${codigo}&limit=1`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': credencials['x-api-key']
				}
			};
			
			if (codigo.length != 7)
				res.status(404).send('Código da disciplina mal informado');
			
			request(options)
				.then((response) => {
					if (response.length == 0 ) {
						res.status(404).send('Disciplina não encontrada');
					} else {
						const disciplina = response[0];
						res.json(disciplina);
					}
				})
				.catch((error)=>{
					res.status(error.statusCode).send(error.message);
				})
		})
		.catch((err) => {
				res.status(err.statusCode).send(err.message);
		});
}

exports.get_query = (req, res) => {
	let options = {
		'method': 'POST',
		'uri': `${base_url}/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	request(options)
		.then((auth) => {
			let codigo = req.query.codigo;
			let options = {
				'method': 'GET',
				'uri': `${credencials['api-url']}/curso/v0.1/componentes-curriculares?codigo=${codigo}&limit=1`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': credencials['x-api-key']
				}
			};
			request(options)
				.then((response) => {
					if (response.length == 0 ) {
						res.status(404).send('Disciplina não encontrada');
					} else {
						const disciplina = response[0];
						res.json(disciplina);
					}
				})
				.catch((error)=>{
					res.status(error.statusCode).send(error.message);
				})
		})
		.catch((err) => {
				res.status(err.statusCode).send(err.message);
		});
}
