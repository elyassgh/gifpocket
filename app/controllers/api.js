/**
 * 
 *  RESTful type controller
 * 
 */
const giphy = require('../util/giphy')
const Gif = require('../models/gif')
const User = require('../models/user')

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

exports.favadd = async (req, res) => {

    var url = req.body.url

    const uid = '607221efa0212044acacb5f2'
    User.findById(uid, (err, user) => {
        if(user) {
            if (url) {

                Gif.findOne({
                    url: url,
                    user: user._id
                }, (err, gif) => {
                    if (!gif) {
                        gif = new Gif({
                            url: url,
                            user: user._id
                        })
                        gif.save((err) => {
                            if (err) return console.error(err.stack)
                        })
                    }
                    res.sendStatus(200)
                })
            } else {
                res.status(404).send('Url missing !')
            }
        } else {
            res.render('error', {
                message: 'User not found !!'
            })
        }
    })

    
}

exports.createUser = (req, res) => {

    const user = new User({
        username: req.body.username,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
    })
    user.save((err) => {
        if (err) return console.error(err.stack)
        res.sendStatus(500).send('Error Occured!')
        return
    })

    res.sendStatus(200)

}

exports.fetchUser = (req, res) => {

    console.log('here')


    const uid = '607221efa0212044acacb5f2'
    User.findById(uid, (err, user) => {
        if(user) {
            res.json(user)
        } else {
            res.render('error', {
                message: 'User not found !!'
            })
        }
    })

}