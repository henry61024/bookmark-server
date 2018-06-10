const express = require('express'),
      bodyParser = require('body-parser'),
      authController = require('../../controllers/index').auth,
      passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      config = require('../../config/index'),
      router = express.Router()

// replace clientID & clientSecret
passport.use(new GoogleStrategy({
            clientID: config.auth.google.clientID,
            clientSecret: config.auth.google.clientSecret,
            callbackURL: `${config.url}/api/auth/google/callback`,
      }, function (accessToken, refreshToken, profile, cb) {
            console.log('google login success, profile:', profile)
            return cb(null, profile);
      }))

router.get('/google', authController.google.authenticate)

router.get('/google/callback', authController.google.authenticateRedirect, function(req, res){
      res.redirect('/#');
})

module.exports = router