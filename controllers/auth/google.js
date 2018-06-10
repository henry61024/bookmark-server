const db = require('../../services/index'),
    passport = require('passport'),
    usersDb = db.Users

module.exports = {
    authenticate,
    authenticateRedirect
}

function authenticate(request, response, next) {
    passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'})(request, response, next)
}

function authenticateRedirect(request, response, next) {
    passport.authenticate('google', { failureRedirect: '/' })(request, response, next);
}