let credencials = require('../environment');

exports.authenticate = (req, res) => {
	let request = require('request-promise');
	let secret = credencials['client-secret'];
	let id = credencials['client-id'];
	let base_url = credencials['api-url'];
	let redirect_uri = req.body.redirect_uri;
	let code = req.body.code;
	var options = {
		'method': 'POST',
		'uri': base_url + `/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code&code=${code}`
	}
	
	request(options)
		.then(response => {
			res.send(response);
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		})
}

/* username, nome, cpf */
exports.user_info = (req, res) => {
	let request = require('request-promise');
	let version = credencials['version'];
	let key = credencials['x-api-key'];
	let base_url = credencials['api-url'];
	let token = req.body.token;
	var options = {
		'method': 'GET',
		'json': true,
		'uri': base_url + `/usuario/${version}/usuarios/info`,
		'headers': {
			'authorization': 'bearer ' + token,
			'x-api-key': key
		}
	};

	request(options)
		.then(response => {
			let discente = {
				username: response['login'],
				nome: response['nome-pessoa'],
				cpf: response['cpf-cnpj']
			}
			res.send(discente);
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		})
}

/* id-discente */
exports.id_discente = (req, res) => {
	let request = require('request-promise');
	let localhost = credencials['localhost'];
	let token = req.body.token;
	var options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/info`,
		'body': {
			'token': token
		}
	};
	request(options)
		.then( discente => {
			let request = require('request-promise');
			let version = credencials['version'];
			let key = credencials['x-api-key'];
			let base_url = credencials['api-url'];
			let token = req.body.token;
			let cpf = discente.cpf;
			var options = {
				'method': 'GET',
				'json': true,
				'uri': base_url + `/discente/${version}/discentes?cpf-cnpj=${cpf}`,
				'headers': {
					'authorization': 'bearer ' + token,
					'x-api-key': key
				}
			};
			request(options)
				.then( response => {
					discente.id_discente = response[0]['id-discente'];
					// envia o primeiro vinculo
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				})
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		})
}

/* semestres: ano, periodo */
exports.semestres_cursados = (req, res) => {
	let request = require('request-promise');
	let localhost = credencials['localhost'];
	let token = req.body.token;
	var options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/id_discente`,
		'body': {
			'token': token
		}
	};
	request(options)
		.then(discente => {
			let request = require('request-promise');
			let version = credencials['version'];
			let key = credencials['x-api-key'];
			let base_url = credencials['api-url'];
			let token = req.body.token;
			let id = discente.id_discente;
			var options = {
				'method': 'GET',
				'json': true,
				'uri': base_url + `/matricula/${version}/semestres-cursados?id-discente=${id}`,
				'headers': {
					'authorization': 'bearer ' + token,
					'x-api-key': key
				}
			};
			request(options)
				.then( response => {
					// envia o ultimo semestre
					let current_semester = response.length - 1;
					discente.semestre = response[current_semester];
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				})
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		})
}

/* turmas do semestre atual: */
exports.tumas_discente = (req, res) => {
	let request = require('request-promise');
	let localhost = credencials['localhost'];
	let token = req.body.token;
	var options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/semestres_cursados`,
		'body': {
			'token': token
		}
	};
	request(options)
		.then(discente => {
			let request = require('request-promise');
			let version = credencials['version'];
			let key = credencials['x-api-key'];
			let base_url = credencials['api-url'];
			let token = req.body.token;
			let id = discente.id_discente;
			let periodo = discente.semestre.periodo;
			let ano = discente.semestre.ano;
			var options = {
				'method': 'GET',
				'json': true,
				'uri': base_url + `/turma/${version}/turmas?id-discente=${id}&ano=${ano}&periodo=${periodo}`,
				'headers': {
					'authorization': 'bearer ' + token,
					'x-api-key': key
				}
			};
			request(options)
				.then( response => {
					// array de turmas do semestre atual
					discente.turmas = response;
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				})
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		})
}