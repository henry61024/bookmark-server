const google = require('./google'),
      facebook = require('./facebook')

module.exports = {
    google,
    facebook,
    authenticateSuccess,
    logout,
}

function authenticateSuccess(req, res){
    res.redirect('/#');
}

function logout(req, res) {
    console.log('logout: ', req.user)
    req.logout()
    req.session.destroy(function (err) {
        res.redirect('/#')
    })
}