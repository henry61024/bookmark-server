const router = require('express').Router(),
      googleRouter = require('./google'),
      config = require('../../../config/index')

if (config.auth.google.enable) {
    router.use('/google', googleRouter)
}

module.exports = router