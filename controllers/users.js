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

exports.readSelfProfile = (req, res) => {
    responseReadSelfProfile(res, req.user)
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
    res.status(201).json(getResponseUser(user))
}

function responseRead(res, user) {
    res.status(200).json(getResponseUser(user))
}

function responseReadSelfProfile(res, user) {
    if (user) {
        res.status(200).json(getResponseUser(user))
    } else {
        res.status(401).json({ message: 'not login yet' })
    }
}

function responseUpdate(res, user) {
    res.status(200).json()
}

function responseDelete(res, user) {
    res.status(204).json()
}

function getResponseUser(user) {
    return {
        authId: user.authId,
        name: user.name,
        avatar: user.avatar,
        gender: user.gender,
        provider: user.provider,
        createTime: user.createTime,
        role: user.role,
    }
}