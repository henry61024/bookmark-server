const service = require('../services/index'),
      usersService = service.Users

exports.readAll = (request, response) => {
    usersService.readAll()
           .then(responseReadAll.bind(null, response))
           .catch(console.error)
}

exports.create = (request, response) => {
    usersService.create(request.body)
           .then(responseCreate.bind(null, response))
           .catch(console.error)
}

exports.read = (request, response) => {
    usersService.read(request.params.name)
           .then(responseRead.bind(null, response))
           .catch(console.error)
}

exports.update = (request, response) => {
    const userObj = {
        name: request.params.name
    }
    usersService.update(userObj)
           .then(responseUpdate.bind(null, response))
           .catch(console.error)
}

exports.delete = (request, response) => {
    usersService.delete({ name: request.params.name })
           .then(responseDelete.bind(null, response))
           .catch(console.error)
}

function responseReadAll(response, users) {
    response.status(201).json(users)
}

function responseCreate(response, user) {
    response.status(201).json({
        name: user.name
    })
}

function responseRead(response, user) {
    response.status(200).json({
        name: user.name
    })
}

function responseUpdate(response, user) {
    response.status(200).json()
}

function responseDelete(response, user) {
    response.status(204).json()
}