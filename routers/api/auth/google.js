const express = require('express'),
      authController = require('../../../controllers/index').auth,
      auth = require('../../../lib/auth/index'),
      router = express.Router()

auth.initGoogle()

router.get('/', authController.google.authenticate)

router.get('/callback', authController.google.authenticateCallback, authController.authenticateSuccess)

module.exports = router