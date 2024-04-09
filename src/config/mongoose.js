const mongoose = require('mongoose')
const logger = require('./logger')
const { mongo, env } = require('./vars')

// set mongoose Promise to Bluebird
mongoose.Promise = Promise

// Exit application on error
mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`)
    process.exit(-1)
})

// print mongoose logs in dev env
if (env === 'development') {
    mongoose.set('debug', true)
}

exports.connect = () => {
    mongoose.connect(mongo.uri).then(() => console.info('mongoDB connected...'))
    return mongoose.connection
}
