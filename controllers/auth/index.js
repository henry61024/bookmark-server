const google = require('./google'),
      facebook = require('./facebook')

module.exports = {
    google,
    facebook,
    authenticateSuccess,
}

function authenticateSuccess(req, res){
    res.redirect('/#');
}