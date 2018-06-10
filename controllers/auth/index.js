const google = require('./google'),
      usersDb = require('../../services/users')

module.exports = {
    google,
    findUserById
}

function findUserById(id) {
    return usersDb.findById(id)
}