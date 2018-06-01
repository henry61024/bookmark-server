const express = require('express'),
      api = require('./api/index'),
      router = express.Router()

router.use('/api', api)

module.exports = router