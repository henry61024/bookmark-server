const router = require('express').Router(),
      auth = require('../../../lib/auth/index'),
      authController = require('../../../controllers/index').auth

auth.initFacebook()

router.get('/', authController.facebook.authenticate)

router.get('/callback', authController.facebook.authenticateCallback, authController.authenticateSuccess)

module.exports = router