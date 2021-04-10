const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/ApiError')

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    gifs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Gif"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({
    find: (email) => {
        return this.findOne({ email: email })
        .populate('gifs')
        .exec()
        .then((user) => {
            if (user) {
                return user
            }
            const err = new APIError('No such user exists!', httpStatus.NOT_FOUND)
            return Promise.reject(err) 
        })
    },
})

/**
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema)