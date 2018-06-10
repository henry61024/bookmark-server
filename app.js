const express = require('express'),
      mongoose = require('mongoose'),
      path = require('path'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      session = require('express-session'),
      router = require('./routers/index'),
      services = require('./services/index'),
      config = require('./config/index'),
      app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/poc')
mongoose.connection.on('error', console.error)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// commons
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session(config.session))

// passport
passport.serializeUser(function(user, done) {
      console.log('serializeUser: ' + user.id)
      done(null, user.id)
})

passport.deserializeUser(function(id, done) {
      console.log('deserializeUser: ' + id)
      done(null, id)
})
app.use(passport.initialize())
app.use(passport.session())

// router
app.use(router)

app.listen(config.port)