var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

function setupRoutes (app) {
  return new Promise((resolve, reject) => {
    app.use('/', require('./routes'))
    resolve(app);
  });
}

function setupExpress () {
  return new Promise((resolve, reject) => {
    var app = express()

    // ===== Configuration =====//
    app.set('trust proxy', true)
    app.set('port', 1310)

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      next()
    })

    app.use(bodyParser.urlencoded({ extended: false }))
    resolve(app);
  });
}

function startServer (app) {
  app.listen(app.get('port'), function () {
    console.log(`Server is running on port ${app.get('port')}, (${new Date()})`);
  })
}

setupExpress()
  .then((app) => setupRoutes(app))
  .then((app) => startServer(app));
