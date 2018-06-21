const express = require('express'),
      users = require('./users'),
      auth = require('./auth/index'),
      router = express.Router()

router.use('/users', users)
router.use('/auth', auth)

module.exports = router