const credencials = require('../config')
const jwt = require('jsonwebtoken') 

exports.redirect = (req, res) => {
	res.redirect(`https://apitestes.info.ufrn.br/authz-server/oauth/authorize?client_id=${credencials['client-id']}&response_type=code&redirect_uri=https://${req.headers.host}/api/login/auth`)
}

exports.auth = (req, res) => {
	if ( !req.query.code ) {
		res.status(401).end()
	}
	const user = { id: req.query.code }
	const token = jwt.sign({ user }, 'my_secret_key')
	
	res.json({
		token: token
	})
	//res.redirect(`https://${req.headers.host}/orientador`)
}
