const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateRedirect
}

function authenticate(request, response, next) {
    auth.authenticate('facebook', {})(request, response, next)
}

function authenticateRedirect(request, response, next) {
    auth.authenticate('facebook', { failureRedirect: '/' })(request, response, next)
}