const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateRedirect
}

function authenticate(req, res, next) {
    auth.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'})(req, res, next)
}

function authenticateRedirect(req, res, next) {
    auth.authenticate('google', { failureRedirect: '/' })(req, res, next)
}