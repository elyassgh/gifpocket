/**
 * 
 *  MVC type controler
 * 
 */

const giphy = require('../util/giphy')
const User = require('../models/user')

exports.home = (req, res) => {
    res.render('index')
}

exports.search = (req, res) => {

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

exports.pocket = (req, res) => {

    const user = User.findOne({ email: req.params.email })

    res.render('pocket', { user })
}
