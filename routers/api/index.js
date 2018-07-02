const express = require('express'),
      users = require('./users'),
      auth = require('./auth/index'),
      authController = require('../../controllers/index').auth,
      userController = require('../../controllers/index').Users,
      router = express.Router()

router.use('/users', users)
router.use('/auth', auth)

router.get('/logout', authController.logout)
router.get('/profile', userController.readSelfProfile)

module.exports = router