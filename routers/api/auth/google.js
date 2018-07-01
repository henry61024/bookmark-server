const router = require('express').Router(),
      authController = require('../../../controllers/index').auth

authController.google.init()

router.get('/', authController.google.authenticate)

router.get('/callback', authController.google.authenticateCallback, authController.authenticateSuccess)

module.exports = router