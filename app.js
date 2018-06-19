const express = require('express'),
      mongoose = require('mongoose'),
      path = require('path'),
      bodyParser = require('body-parser'),
      router = require('./routers/index'),
      app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/poc')
mongoose.connection.on('error', console.error)

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(process.env.PORT || 3000)