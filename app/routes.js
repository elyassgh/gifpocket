/**
 * 
 *  App routes file 
 * 
 */

// app controllers
var core = require('./controllers/core')
var api = require('./controllers/api')

module.exports = function (app){ 

    app.get('/', core.home)

    app.get('/search/', core.search)
    app.get('/search/:query', core.search)

    app.post('/search', core.search)

    app.post('/fav/:url', api.favadd)

    app.get('/api/search', api.search)

}