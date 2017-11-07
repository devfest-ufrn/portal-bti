exports.login = (req, res) => {
	var request = require('request-promise')
	var options = {
		'method': 'GET',
		'uri': `http://apitestes.info.ufrn.br/authz-server/oauth/authorize?client_id=portal-bti-id&response_type=code&redirect_uri=http://${req.headers.host}/login/auth`,
	}
	request(options)
		.then((sigaa) => {
			// Html do login
			res.send(sigaa)
		})
		.catch((err) => {
			res.send(err.message)
		})
}
