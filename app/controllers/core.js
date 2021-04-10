/**
 * 
 *  MVC type controler
 * 
 */

// importing the database 
// var db = require('../util/db')

var giphy = require('../util/giphy')

exports.home = function (req, res) {
    res.render('index')
}

exports.search = function (req, res) {

    var query = req.params.query
    var offset = req.query.offset
    var limit = req.query.limit

    if(req.method == 'POST') {
        query = req.body.query
    }

    if (query) {
        giphy.search(query, offset, limit)
            .then(result => {
                var data = result.data
                res.render('search', {
                   searches: Object.keys(data).map((key) => [key, data[key]])
                })
            })
            .catch(error => {
                console.error(error)
            })
    } else {
        res.render('search')
    }
}
