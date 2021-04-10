/**
 * 
 *  Server bootstrapper file
 * 
 */

require('dotenv').config()

var app = require('./app/server')

// server runner
app.listen(process.env.PORT_NUMBER, () =>
    console.log('server is running on : http://localhost:' + process.env.PORT_NUMBER)
)