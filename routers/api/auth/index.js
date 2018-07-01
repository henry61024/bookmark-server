const router = require('express').Router(),
      config = require('../../../configs/index')

if (config.auth.google.enable) {
    router.use('/google', require('./google'))
}

if (config.auth.facebook.enable) {
    router.use('/facebook', require('./facebook'))
}

module.exports = router