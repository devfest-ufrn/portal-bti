'use strict';

let request = require('request-promise');
let credencials = require('../environment');
let secret = credencials['client-secret'];
let id = credencials['client-id'];
let base_url = credencials['api-url'];
let version = credencials['version'];
let localhost = credencials['localhost'];
let key = credencials['x-api-key'];

exports.authenticate = (req, res) => {
	let redirect_uri = req.body.redirect_uri;
	let code = req.body.code;
	let options = {
		'method': 'POST',
		'uri': base_url + `/authz-server/oauth/token?client_id=${id}&client_secret=${secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code&code=${code}`
	};
	request(options)
		.then(response => {
			res.status(200).send(response);
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};

/* necessita apenas do token 
	username, nome, cpf */
exports.user_info = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'GET',
		'json': true,
		'uri': base_url + `/usuario/${version}/usuarios/info`,
		'headers': {
			'authorization': 'bearer ' + token,
			'x-api-key': key
		}
	};
	let request = require('request-promise');
	request(options)
		.then(response => {
			let discente = {
				username: response['login'],
				nome: response['nome-pessoa'],
				cpf: response['cpf-cnpj']
			};
			res.send(discente);
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};

/* necessita cpf, user_info */
exports.id_discente = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/info`,
		'body': {
			'token': token
		}
	};
	let request = require('request-promise');
	request(options)
		.then( discente => {
			let token = req.body.token;
			let cpf = discente.cpf;
			let options = {
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
					let last = response.length;
					let id_bti = 92127264;
					for (let vinculo of response) {
						if ( vinculo['id-curso'] ==  id_bti ) {
							discente.id_discente = vinculo['id-discente'];
							break;
						}
					}
					// envia o primeiro vinculo
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				});
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};

/* necessita id-discente, id_discente */
exports.semestres_cursados = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/id_discente`,
		'body': {
			'token': token
		}
	};
	let request = require('request-promise');
	request(options)
		.then(discente => {
			let token = req.body.token;
			let id = discente.id_discente;
			let options = {
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
					// envia o todos os semestes
					discente.semestres = response;
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				});
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};

/* necessita semestres, semestres_cursados */
exports.turmas_semestre_atual = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + '/api/user/semestres_cursados',
		'body': {
			'token': token
		}
	};
	let request = require('request-promise');
	request(options)
		.then(discente => {
			let token = req.body.token;
			let current_semester = discente.semestres.length - 1;
			discente.semestre = discente.semestres[current_semester];
			let id = discente.id_discente;
			let periodo = discente.semestre.periodo;
			let ano = discente.semestre.ano;
			let options = {
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
				});
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};

/* turmas de todos os semestres */
exports.turmas = (req, res) => {
	let token = req.body.token;
	let options = {
		'method': 'POST',
		'json': true,
		'uri': localhost + `/api/user/semestres_cursados`,
		'body': {
			'token': token
		}
	};
	let request = require('request-promise');
	request(options)
		.then( discente => {
			let id = discente.id_discente;
			let options = {
				'method': 'GET',
				'json': true,
				'uri': base_url + `/turma/${version}/turmas?id-discente=${id}`,
				'headers': {
					'authorization': 'bearer ' + token,
					'x-api-key': key
				}
			};
			request(options)
				.then( response => {
					discente.turmas = response;
					res.send(discente);
				})
				.catch( err => {
					res.status(err.statusCode).send(err);
				});
		})
		.catch(err => {
			res.status(err.statusCode).send(err.message);
		});
};