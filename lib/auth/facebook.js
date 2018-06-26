const passport = require('passport'),
      FacebookStrategy = require('passport-facebook'),
      config = require('../../configs/index'),
      authSuccess = require('./util').authSuccess,
      authConfig = {
          clientID: config.auth.facebook.clientID,
          clientSecret: config.auth.facebook.clientSecret,
          callbackURL: `${config.url}/api/auth/facebook/callback`,
          profileFields: ['id', 'displayName', 'gender', 'name', 'photos', 'email'],
          enableProof: true,
      }

exports.init = function() {
    passport.use(new FacebookStrategy(authConfig, authSuccess))
}