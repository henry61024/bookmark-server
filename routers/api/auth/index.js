const router = require('express').Router(),
      googleRouter = require('./google'),
      facebookRouter = require('./facebook')
      config = require('../../../configs/index')

if (config.auth.google.enable) {
    router.use('/google', googleRouter)
}

if (config.auth.facebook.enable) {
    router.use('/facebook', facebookRouter)
}

module.exports = router