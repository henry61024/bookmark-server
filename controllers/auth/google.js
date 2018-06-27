const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateCallback
}

function authenticate(req, res, next) {
    auth.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'})(req, res, next)
}

function authenticateCallback(req, res, next) {
    auth.authenticate('google', { failureRedirect: '/' })(req, res, next)
}