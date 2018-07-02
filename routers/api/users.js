const express = require('express'),
      controller = require('../../controllers/index'),
      router = express.Router()

router.get('/', controller.Users.readAll)

router.post('/', controller.Users.create)

router.get('/:name', controller.Users.read)

router.put('/:name', controller.Users.update)

router.delete('/:name', controller.Users.delete)

module.exports = router