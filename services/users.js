const models = require('../models/index'),
      User = models.User

exports.create = (obj) => {
    const user = new User(obj)
    return user.save()
}

exports.read = (name) => {
    return User.findOne({ name }).exec()
}

exports.update = (obj) => {
    return User.findOneAndUpdate({ name: obj.name }, obj).exec()
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