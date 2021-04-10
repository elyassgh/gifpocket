/**
 * 
 *  Data base file 
 * 
 */
const mongoose = require('mongoose')

mongoose.connect(
    process.env.DATA_BASE_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected')
})

db.on('error', err => {
    console.error('Connection error:', err)
})


module.exports = {mongoose, db};