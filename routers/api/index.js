const express = require('express'),
      users = require('./users'),
      auth = require('./auth'),
      router = express.Router()

router.use('/users', users)
router.use('/auth', auth)

module.exports = router