const models = require('../models/index'),
      User = models.User

exports.create = (obj) => {
    const user = new User(obj)
    return user.save()
}

exports.read = (username) => {
    return User.findOne({ username }).exec()
}

exports.update = (obj) => {
    return User.findOneAndUpdate({ username: obj.username }, obj).exec()
}

exports.delete = (obj) => {
    return User.findOneAndRemove(obj).exec()
}

exports.findById = (id) => {
    return User.findById(id).exec()
}

exports.findByAuthId = (authId) => {
    return User.findOne({ authId }).exec()
}

exports.readAll = () => {
    return User.find().exec()
}