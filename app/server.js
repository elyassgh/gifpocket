/**
 * 
 *  App Server initializer 
 * 
 */

var express = require('express')

// express app instance
var app = express()

// template engine
app.set('view engine', 'ejs')

// app templates directory
app.set('views', __dirname + '/../public/views')

// static files publicly accessed
app.use(express.static(__dirname + '/../public'))

// body parser for request body
app.use(express.urlencoded())
app.use(express.json())

// importing database
require('./database.js')

// importing app routes
require('./routes.js')(app)

// every file imported this file can access to this app instance
module.exports = app