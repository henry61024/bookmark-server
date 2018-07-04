const express = require('express'),
      userController = require('../../controllers/index').users,
      router = express.Router()

router.get('/', userController.readAll)

router.post('/', userController.create)

router.get('/:name', userController.read)

router.put('/:name', userController.update)

router.delete('/:name', userController.delete)

module.exports = router