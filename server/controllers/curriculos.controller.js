'use strict';

let request = require('request-promise')
let credencials = require('../environment');
let id = credencials['client-id'];
let secret = credencials['client-secret'];
let key = credencials['x-api-key'];
let url = credencials['api-url'];
let localhost = credencials['localhost'];
let version = credencials['version'];



exports.curriculos_bti = (req, res) => {
	
	var options = {
		'method': 'POST',
		'uri': `${url}/authz-server/oauth/token?client_id=${credencials['client-id']}&client_secret=${secret}&grant_type=client_credentials`,
		'json': true
	};
	// request para as credenciais de autorização
	request(options)
		.then((auth) => {
			
			// id do curso de tecnologia da informação da api
			let id_curso = 92127264;
			
			var options = {
				'method': 'GET',
				'uri': `${url}/curso/${version}/matrizes-curriculares?id-curso=${id_curso}&ativo=true`,
				'json': true,
				'headers': {
					'authorization': `${auth.token_type} ${auth.access_token}`,
					'x-api-key': key
				}
			};
			// request para o componente-curricular
			request(options)
				.then((curriculos) => {
					// formata a resposta da api
					res.json(curriculos);
				})
				.catch((error)=>{
					// Error on getting disciplina
					res.status(error.statusCode).send(error.message);
				});
		})
		.catch((err) => {
				// Authentication error
				res.status(err.statusCode).send(err.message);
		});
};

exports.curriculos_curso_usuario = (req, res) => {
	
}