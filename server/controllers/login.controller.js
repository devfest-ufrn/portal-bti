var credencials = require('../config')

exports.redirect = (req, res) => {
	res.redirect(`https://apitestes.info.ufrn.br/authz-server/oauth/authorize?client_id=${credencials['client-id']}&response_type=code&redirect_uri=https://${req.headers.host}/api/login/auth`)
}

exports.auth = (req, res) => {
	console.log(req)
	res.end()
}
