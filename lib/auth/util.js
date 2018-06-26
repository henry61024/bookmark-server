const userService = require('../../services/index').Users,
      constant = require('../../constants/index')

exports.authSuccess = function(strategy, accessToken, refreshToken, profile, done) {
    const strategyConstant = constant.auth[strategy]
    if (!strategyConstant) return console.error('strategy not exists');

    console.log('login success, profile:', profile)
    profile.authId = `${strategyConstant.authIdPrefix}${profile.id}`
    userService.findByAuthId(profile.authId).then((user) => {
            if (user) return done(null, user)
            createUser(profile).then((createdUser) => {done(null, createdUser)})
        })
}

function createUser(profile) {
    return userService.create({
        authId: profile.authId,
        name: profile.displayName,
        gender: profile.gender,
        avatar: profile.photos[0].value,
        createTime: Date.now(),
        role: constant.role.member,
    })
}