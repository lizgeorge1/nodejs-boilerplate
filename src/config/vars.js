const path = require('path')

// import .env variables
require('dotenv-safe').config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
    example: path.join(__dirname, '../../.env.example'),
})

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        uri:
            process.env.NODE_ENV === 'development'
                ? process.env.MONGO_URI_DEV
                : process.env.MONGO_URI,
    }
}
