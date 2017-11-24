const credencials = require('../config')

exports.redirect = (req, res) => {
	res.redirect(`${credencials['api-url']}/authz-server/oauth/authorize?client_id=${credencials['client-id']}&response_type=code&redirect_uri=https://${req.headers.host}/api/login/auth`)
}

exports.auth = (req, res) => {
	if ( !req.query.code ) {
		res.status(401).end()
	}
	const user = { id: req.query.code }
	res.redirect(`https://${req.headers.host}/orientador`)
}

exports.test = (req, res) => {
	console.log(req.params.query['code'])
	res.redirect(307, `${credencials['api-url']}/authz-server/oauth/token?client_id=${credencials['client-id']}&client_secret=${credencials['client-secret']}&redirect_uri=http://enderecoapp.com.br/pagina&grant_type=authorization_code&code=code`)
}