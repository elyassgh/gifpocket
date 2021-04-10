/**
 * 
 *  App routes file 
 * 
 */

// app controllers
var core = require('./controllers/core')
var api = require('./controllers/api')

module.exports =  (app) => { 

    app.get('/', core.home)

    app.get('/search/', core.search)
    app.get('/search/:query', core.search)

    app.post('/search', core.search)

    app.post('/api/fav/add', api.favadd)

    app.get('/api/search', api.search)

    app.get('/api/pocket', core.pocket)

    app.post('/api/user/create', api.createUser)

    app.get('/api/user/get', api.fetchUser)


}