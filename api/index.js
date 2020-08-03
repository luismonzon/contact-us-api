const { Router } = require('express');
const userRoute = require('./routes/userRoute')

const api = Router();

api.get('/', (req, res) => {
    res.send({
        hour: new Date()
    })
})
api.use('/users', userRoute)

module.exports = api;