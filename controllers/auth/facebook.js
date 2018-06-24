const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateRedirect
}

function authenticate(req, res, next) {
    auth.authenticate('facebook', {})(req, res, next)
}

function authenticateRedirect(req, res, next) {
    auth.authenticate('facebook', { failureRedirect: '/' })(req, res, next)
}