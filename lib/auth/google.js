const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      config = require('../../configs/index'),
      authSuccess = require('./util').authSuccess,
      authConfig = {
          clientID: config.auth.google.clientID,
          clientSecret: config.auth.google.clientSecret,
          callbackURL: `${config.url}/api/auth/google/callback`,
      }

exports.init = function() {
    passport.use(new GoogleStrategy(authConfig, authGoogleSuccess))
}

function authGoogleSuccess(accessToken, refreshToken, profile, done) {
    authSuccess('google', accessToken, refreshToken, profile, done)
}