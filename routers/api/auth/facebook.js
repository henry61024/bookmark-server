const router = require('express').Router(),
      authController = require('../../../controllers/index').auth

authController.facebook.init()

router.get('/', authController.facebook.authenticate)

router.get('/callback', authController.facebook.authenticateCallback, authController.authenticateSuccess)

module.exports = router