const express = require('express'),
      authController = require('../../controllers/index').auth,
      auth = require('../../lib/auth/index'),
      router = express.Router()

// rename
auth.initGoogle();

router.get('/google', authController.google.authenticate)

router.get('/google/callback', authController.google.authenticateRedirect, function(req, res){
      res.redirect('/#');
})

module.exports = router