const express = require('express'),
      users = require('./users'),
      router = express.Router()

router.use('/users', users)

module.exports = router