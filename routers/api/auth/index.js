const router = require('express').Router(),
      googleRouter = require('./google'),
      facebookRouter = require('./facebook')
      config = require('../../../config/index')

if (config.auth.google.enable) {
    router.use('/google', googleRouter)
}

if (config.auth.facebook.enable) {
    router.use('/facebook', facebookRouter)
}

module.exports = router