const express = require('express')
const httpStatus = require('http-status')
// const transactionRoutes = require('./transaction.route')

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
    res.status(httpStatus.OK).send('OK'); 
});

// router.use('/transaction', transactionRoutes)

module.exports = router
