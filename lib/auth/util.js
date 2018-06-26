const userService = require('../../services/index').Users,
      constant = require('../../constants/index')

exports.authSuccess = function(accessToken, refreshToken, profile, done) {
    console.log('login success, profile:', profile)
    userService.findByAuthId(profile.id).then((user) => {
            if (user) return done(null, user)
            createUser(profile).then((createdUser) => {done(null, createdUser)})
        })
}

function createUser(profile) {
    return userService.create({
        authId: profile.id,
        name: profile.displayName,
        avatar: profile.photos[0].value,
        gender: profile.gender,
        provider: profile.provider,
        createTime: Date.now(),
        role: constant.role.member,
    })
}