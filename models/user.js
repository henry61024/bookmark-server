const mongoose = require('mongoose'),
      userSchema = new mongoose.Schema({
          username: String,
          description: String
      })

module.exports = mongoose.model('User', userSchema);