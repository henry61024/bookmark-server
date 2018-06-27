const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateCallback
}

function authenticate(req, res, next) {
    auth.authenticate('facebook', {})(req, res, next)
}

function authenticateCallback(req, res, next) {
    auth.authenticate('facebook', { failureRedirect: '/' })(req, res, next)
}