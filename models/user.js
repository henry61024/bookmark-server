const mongoose = require('mongoose'),
      userSchema = new mongoose.Schema({
          authId: String,
          username: String,
          description: String,
          createTime: Date,
          role: String,
      })

module.exports = mongoose.model('User', userSchema);