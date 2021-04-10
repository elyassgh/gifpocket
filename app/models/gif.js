const mongoose = require('mongoose')

const GifSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },createdAt: {
        type: Date,
        default: Date.now
    }
})

GifSchema.statics = {
    /**
     * Get user
     * @param {ObjectId} id - The objectId of user.
     * @returns {Promise<Gif, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((gif) => {
                if (gif) {
                    return gif
                }
                const err = new APIError('No such gif exists!', httpStatus.NOT_FOUND)
                return Promise.reject(err)
            })
    },

    /**
     * List users in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<User[]>}
     */
    list({
        skip = 0,
        limit = 50
    } = {}) {
        return this.find()
            .sort({
                createdAt: -1
            })
            .skip(+skip)
            .limit(+limit)
            .exec()
    }
}

/**
 * @typedef Gif
 */
module.exports = mongoose.model('Gif', GifSchema)