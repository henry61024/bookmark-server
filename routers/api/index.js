const express = require('express'),
      users = require('./users'),
      auth = require('./auth/index'),
      authController = require('../../controllers/index').auth,
      router = express.Router()

router.use('/users', users)
router.use('/auth', auth)

router.get('/logout', authController.logout)

module.exports = router