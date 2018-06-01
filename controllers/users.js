const db = require('../services/index'),
      usersDb = db.Users

exports.readAll = (request, response) => {
    usersDb.readAll()
           .then(responseReadAll.bind(null, response))
           .catch(console.error)
}

exports.create = (request, response) => {
    usersDb.create(request.body)
           .then(responseCreate.bind(null, response))
           .catch(console.error)
}

exports.read = (request, response) => {
    usersDb.read(request.params.username)
           .then(responseRead.bind(null, response))
           .catch(console.error)
}

exports.update = (request, response) => {
    const userObj = {
        username: request.params.username,
        description: request.body.description
    }
    usersDb.update(userObj)
           .then(responseUpdate.bind(null, response))
           .catch(console.error)
}

exports.delete = (request, response) => {
    usersDb.delete({ username: request.params.username })
           .then(responseDelete.bind(null, response))
           .catch(console.error)
}

function responseReadAll(response, users) {
    response.status(201).json(users)
}

function responseCreate(response, user) {
    response.status(201).json({
        username: user.username,
        description: user.description
    })
}

function responseRead(response, user) {
    response.status(200).json({
        username: user.username,
        description: user.description
    })
}

function responseUpdate(response, user) {
    response.status(200).json()
}

function responseDelete(response, user) {
    response.status(204).json()
}