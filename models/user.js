const mongoose = require('mongoose'),
      userSchema = new mongoose.Schema({
          authId: String,
          name: String,
          avatar: String,
          gender: String,
          provider: String,
          createTime: Date,
          role: String,
      })

module.exports = mongoose.model('User', userSchema);