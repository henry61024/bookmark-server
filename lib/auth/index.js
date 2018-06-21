const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      config = require('../../config/index'),
      userService = require('../../services/index').Users

passport.serializeUser((user, done) => {
    console.log('serializeUser user: ' + user)
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    console.log('deserializeUser: ' + id)
    userService.findById(id).then((user) => {
        // check mongoose exec return arguments
        if (!user) return done(null, id)
        done(null, id)
    })
})

exports.initialize = function() {
    return passport.initialize()
}

exports.session = function() {
    return passport.session()
}

exports.authenticate = function() {
    return passport.authenticate(...arguments)
}

exports.initGoogle = function() {
    passport.use(new GoogleStrategy({
        clientID: config.auth.google.clientID,
        clientSecret: config.auth.google.clientSecret,
        callbackURL: `${config.url}/api/auth/google/callback`,
    }, function (accessToken, refreshToken, profile, done) {
            console.log('google login success, profile:', profile)
            const authId = `${config.auth.google.idPrefix}${profile.id}`
            userService.findByAuthId(authId)
                .then((user) => {
                    if (user) return done(null, user)
                    userService.create({
                        authId: authId,
                        username: profile.displayName,
                        createTime: Date.now(),
                        gender: profile.gender,
                        avatar: profile.photos[0].value,
                        role: 'member',
                    }).then((createdUser) => {done(null, createdUser)})
                })
    }))
}