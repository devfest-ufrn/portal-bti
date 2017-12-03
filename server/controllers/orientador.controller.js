'use strict';

let request = require('request-promise')
let credencials = require('../environment');
let id = credencials['client-id'];
let secret = credencials['client-secret'];
let key = credencials['x-api-key'];
let url = credencials['api-url'];
let localhost = credencials['localhost'];
let version = credencials['version'];

exports.meus_semestres = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'POST',
		'uri': `${localhost}/api/user/turmas`,
		'json': true,
		'body': {
			'token': token
		}
	};
	// request para as credenciais de autorização
	request(options)
		.then( turmas => {
			res.send(turmas);
		})
		.catch( err => {
			res.status(err.statusCode).send(err);
		});
};