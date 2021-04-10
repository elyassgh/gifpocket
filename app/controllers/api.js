/**
 * 
 *  RESTful type controller
 * 
 */
const giphy = require('../util/giphy')

exports.search = (req, res) => {
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
            message: error
        });
    }
}

exports.favadd = (req, res) => {

    var url = req.body.url

    if (url) {
        
    } else {
        res.json({
            message: error
        });
    }
}