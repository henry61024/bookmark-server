const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('../../controllers/index'),
      router = express.Router()

router.get('/', controller.Users.readAll)

router.post('/', controller.Users.create)

router.get('/:username', controller.Users.read)

router.put('/:username', controller.Users.update)

router.delete('/:username', controller.Users.delete)

module.exports = router