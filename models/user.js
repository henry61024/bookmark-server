const mongoose = require('mongoose'),
      userSchema = new mongoose.Schema({
          authId: String,
          name: String,
          createTime: Date,
          gender: String,
          avatar: String,
          role: String,
      })

module.exports = mongoose.model('User', userSchema);