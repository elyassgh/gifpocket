/**
 * 
 *  RESTful type controller
 * 
 */

// importing the database 
//var db = require('../util/db')
var giphy = require('../util/giphy')

exports.search = function (req, res) {
    var query = req.query.q
    var offset = req.query.o
    var limit = req.query.l

    if (query) {
        giphy.search(query, offset, limit)
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                console.error(error)
            })
    } else {
        res.json({
            message: error});
    }
}

exports.favadd = function (req, res) {

    var item = req.params.item

    if (query) {
        
    } else {
        res.json({
            message: error});
    }
}