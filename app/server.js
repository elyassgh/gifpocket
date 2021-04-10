/**
 * 
 *  App Server initializer 
 * 
 */

const express = require('express')

// express app instance
var app = express()

// template engine
app.set('view engine', 'ejs')

// app templates directory
app.set('views', __dirname + '/../public/views')

// static files publicly accessed
app.use(express.static(__dirname + '/../public'))

// body parser for request body
/* 
    url encoded ethod within body-parser tells body-parser to extract data from the
    <form> element and add them to the body property in the request object.
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// importing database
require('./database.js')

// importing app routes
require('./routes.js')(app)

// every file imported this file can access to this app instance
module.exports = app