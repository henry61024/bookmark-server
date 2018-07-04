const passport = require('passport'),
      userService = require('../../services/index').users

module.exports = {
    initialize: initialize,
    session: session,
    authenticate: authenticate,
    initGoogle: require('./google').init,
    initFacebook: require('./facebook').init,
}

passport.serializeUser((user, done) => {
    console.log('serializeUser user: ' + user)
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    console.log('deserializeUser: ' + id)
    userService.findById(id).then((user) => {
        // check mongoose exec return arguments
        if (!user) return done(null, id)
        done(null, user)
    })
})

function initialize() {
    return passport.initialize()
}

function session() {
    return passport.session()
}

function authenticate() {
    return passport.authenticate(...arguments)
}