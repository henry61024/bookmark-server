const service = require('../services/index'),
      usersService = service.Users

exports.readAll = (req, res) => {
    usersService.readAll()
           .then(responseReadAll.bind(null, res))
           .catch(console.error)
}

exports.create = (req, res) => {
    usersService.create(req.body)
           .then(responseCreate.bind(null, res))
           .catch(console.error)
}

exports.read = (req, res) => {
    usersService.read(req.params.name)
           .then(responseRead.bind(null, res))
           .catch(console.error)
}

exports.update = (req, res) => {
    const userObj = {
        name: req.params.name
    }
    usersService.update(userObj)
           .then(responseUpdate.bind(null, res))
           .catch(console.error)
}

exports.delete = (req, res) => {
    usersService.delete({ name: req.params.name })
           .then(responseDelete.bind(null, res))
           .catch(console.error)
}

function responseReadAll(res, users) {
    res.status(201).json(users)
}

function responseCreate(res, user) {
    res.status(201).json({
        authId: user.authId,
        name: user.name,
        createTime: user.date,
        gender: user.gender,
        avatar: user.avatar,
        role: user.role,
    })
}

function responseRead(res, user) {
    res.status(200).json({
        authId: user.authId,
        name: user.name,
        createTime: user.date,
        gender: user.gender,
        avatar: user.avatar,
        role: user.role,
    })
}

function responseUpdate(res, user) {
    res.status(200).json()
}

function responseDelete(res, user) {
    res.status(204).json()
}