const auth = require('../../lib/auth/index')

module.exports = {
    authenticate,
    authenticateRedirect
}

function authenticate(request, response, next) {
    auth.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'})(request, response, next)
}

function authenticateRedirect(request, response, next) {
    auth.authenticate('google', { failureRedirect: '/' })(request, response, next)
}