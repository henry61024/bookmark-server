const express = require('express'),
      mongoose = require('mongoose'),
      path = require('path'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      router = require('./routers/index'),
      auth = require('./lib/auth/index'),
      config = require('./configs/index'),
      app = express()

mongoose.Promise = global.Promise
mongoose.connect(config.db.url)
mongoose.connection.on('error', console.error)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// commons
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
      secret: config.session.secret,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: { maxAge: config.session.maxAge },
}))

app.use(auth.initialize())
app.use(auth.session())

// router
app.use(router)

app.listen(config.port)